import React, { Suspense } from 'react';
import axios from 'axios';

const fetcher = async () => {
  console.log('fetcher')
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(await axios({ url: 'https://randomuser.me/api/', headers: { 'Cache-Control': 'no-cache' } }))
    }, 3000)
  })
}

function wrapPromise (promise: any) {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read () {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
const resource = wrapPromise(fetcher())


const Contents = () => {

  // const { data, error } = useSWR('aaa', wrapPromise(fetcher()).read(), { suspense: true });
  const aaa = resource.read();

  return <>{JSON.stringify(aaa.data.results)}</>
}

const RandomUser = () => {
  return (
    <Suspense fallback={<div>loading...</div>} >
      <Contents />
    </Suspense>
  )
}

// async function getStaticProps (this: any) {
//   const { data } = await axios.get('https://randomuser.me/api/');
//   return data.result;
// }

// RandomUser.getStaticProps = getStaticProps

export default RandomUser;
