/**
 * @name MAIN
 * @description
 * @refer https://reactnavigation.org/docs/material-top-tab-navigator/
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {debug} from 'lib'
import {stateType} from 'store/type'
import {setTitle, setData} from 'store/modules/history'
import {Main} from 'components/layout'

export default function Presenter() {
  // hooks
  const {data} = useSelector((state: stateType) => state.history)
  const dispatch = useDispatch()
  // Icon
  // hooks
  return (
    <Main>
      <Link to="/test">test</Link>
      <Link to="/guide">가이드</Link>
      <p className=".test">dzfkldsfljdsjl</p>
    </Main>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
