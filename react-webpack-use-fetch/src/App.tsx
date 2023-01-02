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
  return {
    get: () => {
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
}

const useFetch = (url: string) => {
  const fetchData = fetch(url);
  return {
    todos: wrapPromise(fetchData),
  };
}

const todos = useFetch('https://jsonplaceholder.typicode.com/todos')

const App = () => {
  const r = todos.todos.get();
  console.log(r.json());
  return (
    <div>123</div>
  )
}

export default App;