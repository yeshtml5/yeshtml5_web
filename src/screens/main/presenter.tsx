/**
 * @name MAIN
 * @description
 * @refer https://reactnavigation.org/docs/material-top-tab-navigator/
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {debug} from '../../lib/util'

export default function Presenter() {
  // Icon
  // hooks
  return (
    <div className="App">
      <h1>
        <a href="https://redux-toolkit.js.org/">https://redux-toolkit.js.org</a>{' '}
      </h1>
      <h1>
        <a href="https://velog.io/@junghyeonsu/React-create-react-app-Typescript-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC">
          https://velog.io/@junghyeonsu/React-create-react-app-Typescript-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC
        </a>
      </h1>
      <p>
        <code>src/App.tsx</code> and save to reload.
      </p>
      <Link to="/test">test</Link>
    </div>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
