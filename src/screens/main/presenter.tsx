/**
 * @name MAIN
 * @description
 * @refer https://reactnavigation.org/docs/material-top-tab-navigator/
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {debug} from 'lib/util/index'
import {stateType} from 'store/type'
import {setTitle, setData} from 'store/modules/history'

export default function Presenter() {
  // hooks
  const {data} = useSelector((state: stateType) => state.history)
  const dispatch = useDispatch()

  // Icon
  // hooks
  return (
    <div className="App">
      <h1>
        <a href="https://redux-toolkit.js.org/">https://redux-toolkit.js.org</a>{' '}
      </h1>
      {debug(data)}
      <button
        onClick={() => {
          dispatch(setTitle('리덕스 툴킷 !'))
        }}>
        버튼
      </button>
      <button
        onClick={() => {
          dispatch(setData({ss: 'as', title: 'fsd'}))
        }}>
        버튼2222
      </button>
      <p>
        <code>src/App.tsx</code> and save to reload.
      </p>
      <Link to="/test">test</Link>
      <Link to="/guide">가이드</Link>

      <p className=".test">dzfkldsfljdsjl</p>
    </div>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
