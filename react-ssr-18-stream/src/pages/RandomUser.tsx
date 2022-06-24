import React, { Suspense, useEffect, useId, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query'

const fetcher = async () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(await axios({ url: 'https://randomuser.me/api/' }))
    }, 3000)
  })
}



const Contents: React.FC<any> = ({ date }) => {
  const result = useQuery<any>(date, fetcher, {
    staleTime: Infinity, // default 0
    cacheTime: 0, // default 5 minitue 1000 * 60 * 5
    retry: 1, // default 6
    retryDelay: 1000, // default 1000
    suspense: true
  })
  const { data } = result
  return <>{JSON.stringify(data.data)}</>
}

const RandomUser = () => {
  return (
    <Suspense fallback={<div>loading...</div>} >
      <Contents date={`${new Date().getTime()}`} />
    </Suspense>
  )
}

export default RandomUser;
