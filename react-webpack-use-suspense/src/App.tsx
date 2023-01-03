import { Suspense } from "react";
import Axios from 'axios';

const wrapPromise = (promise: Promise<any>) => {
  let status = 'pending';
  let result: any;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    },
  )
  return () => {
    switch (status) {
      case 'success':
        return result;
      case 'error':
        throw result;
      default:
        throw suspender;
    }
  }
}

const useSuspender = (url: string) => wrapPromise(Axios.get(url));
const todos = useSuspender('https://httpbin.org/delay/3')
// https://jsonplaceholder.typicode.com/users/1/todos
// https://httpbin.org/delay/3

const Child = () => {
  const r = todos();
  console.log(r);
  return <div>child component</div>
}

const App = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Child />
    </Suspense>
  )
}

export default App;