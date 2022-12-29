import { Suspense } from "react"
import useSWR, { SWRConfig } from 'swr'

const fetchData = (data: string) => new Promise((resolve) => {
  // return resolve({ data: 'hello suspense' });
  setTimeout(() => {
    return resolve({ data, key: 0 });
  }, 2000);
})

const UserList = () => {
  const obj: any = useSWR('hello swr', fetchData);
  const { mutate, isLoading, data } = obj;
  console.log(obj)
  const onMutate = () => {
    mutate('change value', fetchData);
  }
  if (isLoading) {
    return <>swr loading...</>
  }
  return (
    <>
      <div>{data.data}</div>
      <div>{data.key}</div>
      <button onClick={onMutate}>fetchData</button>
    </>
  )
}

const App = () => {
  return (
    <SWRConfig>
      <Suspense fallback={<div>loading</div>}>
        <UserList />
      </Suspense>
    </SWRConfig>
  )
}

export default App;