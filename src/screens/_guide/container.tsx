/**
 * @name Container
 * @description
 */
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setFetch} from 'store/modules/_guide'
import {useAxios} from 'lib'
// contents
import Presenter from './presenter'

export default function Container() {
  // hooks
  const dispatch = useDispatch()
  const {get} = useAxios('https://jsonplaceholder.typicode.com/posts')

  // * --------------------------------------------------*
  // fetch
  async function fetch() {
    const res = await get()
    console.log(res)
    dispatch(setFetch(res))
  }
  // * --------------------------------------------------*
  useEffect(() => {
    fetch()
  }, [])
  return <Presenter />
}
