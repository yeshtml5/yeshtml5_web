/**
 * @name MAIN
 * @description
 * @refer https://reactnavigation.org/docs/material-top-tab-navigator/
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setTitle} from 'store/modules/history'
import {debug} from 'lib/util/index'
import {stateType} from 'store/type'

export default function Presenter() {
  // hooks
  const {title, month, loading} = useSelector((state: stateType) => state.history)
  const dispatch = useDispatch()

  // Icon
  // hooks
  return (
    <div className="App">
      <h1>
        <a href="https://redux-toolkit.js.org/">https://redux-toolkit.js.org</a>{' '}
      </h1>
      {debug(title)}
      <button
        onClick={() => {
          dispatch(setTitle('리덕스 툴킷 너무 재밌어!'))
        }}>
        버튼
      </button>
      <p>
        <code>src/App.tsx</code> and save to reload.
      </p>
      <Link to="/test">test</Link>
      <p className=".test">dzfkldsfljdsjl</p>
    </div>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
