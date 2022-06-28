/**
 * @name Container
 * @description
 */
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setFetch} from 'store/modules/_guide'
import useFetch from 'use-http'

import Presenter from './presenter'

export default function Container() {
  // hooks
  const dispatch = useDispatch()
  const {get} = useFetch('https://jsonplaceholder.typicode.com/posts')

  // * --------------------------------------------------*
  // fetch
  async function fetch() {
    const res = await get()
    dispatch(setFetch(res))
  }
  // * --------------------------------------------------*
  useEffect(() => {
    fetch()
  }, [])
  return <Presenter />
}
