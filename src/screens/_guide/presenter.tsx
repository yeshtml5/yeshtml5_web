/**
 * @name Guide
 * @description
 */
import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {stateType} from 'store/type'
import {Main} from 'components/layout'
// contents
import {Header} from './common'
import {GUIDE} from 'store/modules/_guide'
import {Events} from 'lib/events'

export default function Presenter() {
  // hooks
  const {fetch_data} = useSelector((state: stateType) => state.guide)
  return (
    <Main>
      {/* header */}
      <Header />
      <div className="App">
        {/* {debug(fetched)} */}
        {fetch_data?.map((item: any, index: number) => {
          return (
            <Item
              className="item"
              key={`${item}_${index}`}
              onClick={() => {
                Events.emit(GUIDE.SELECT, index)
              }}>
              <span className="number">{index}</span>
              <span className="title">{item?.title}</span>
            </Item>
          )
        })}
      </div>
    </Main>
  )
}
// * --------------------------------------------------*
const Item = styled.div`
  padding: 5px 10px;
  font-size: 12px;
  border-bottom: 1px solid #111;
  .number {
    padding: 10px 5px;
    font-size: 10px;
    font-weight: bold;
  }
`
