/**
 * @name Guide
 * @description
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {stateType} from 'store/type'
import {Main} from 'components/layout'

export default function Presenter() {
  // hooks
  const {fetch_data} = useSelector((state: stateType) => state.guide)

  return (
    <Main>
      <div className="App">
        {/* {debug(fetched)} */}
        {fetch_data?.map((item: any, index: number) => {
          return (
            <div className="item" style={{marginBottom: 10, color: 'black'}} key={`${item}_${index}`}>
              <span>{index}</span>
              <span>{item?.title}</span>
            </div>
          )
        })}
        <p>
          <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/test">test</Link>
        <p className=".test">dzfkldsfljdsjl</p>
      </div>
    </Main>
  )
}
