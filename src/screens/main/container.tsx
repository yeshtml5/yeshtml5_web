/**
 * @name Container
 * @description
 */
import React, {useEffect} from 'react'
import useFetch from 'use-http'
import Presenter from './presenter'

export default function Container() {
  // hooks
  const {get, loading, error, data = []} = useFetch('https://jsonplaceholder.typicode.com/posts')

  async function fetch() {
    const res = await get()
    console.log(res)
  }
  useEffect(() => {
    fetch()
  }, [])
  return <Presenter />
}
