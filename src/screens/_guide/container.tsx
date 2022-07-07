/**
 * @name Container
 * @description
 */
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {GUIDE, setFetch, setSelect} from 'store/modules/_guide'
import {useAxios} from 'lib'
// contents
import Presenter from './presenter'
import {Events} from 'lib/events'

export default function Container() {
  // hooks
  const dispatch = useDispatch()
  const {get} = useAxios('https://jsonplaceholder.typicode.com/posts')

  // * --------------------------------------------------*
  // fetch
  async function fetch() {
    const res = await get()
    dispatch(setFetch(res))
  }
  const onSelect = (data: any) => {
    dispatch(setSelect(data))
  }
  // * --------------------------------------------------*
  useEffect(() => {
    fetch()
    Events.addListener(GUIDE.SELECT, onSelect)
    return () => {
      Events.removeListener(GUIDE.SELECT, onSelect)
    }
  }, [])
  return <Presenter />
}
