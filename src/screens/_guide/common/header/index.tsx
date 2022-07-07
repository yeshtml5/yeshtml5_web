/**
 * @name Content
 */
import React from 'react'
import {useSelector} from 'react-redux'
import {stateType} from 'store/type'
import styled from 'styled-components'

export default function Contents() {
  // store
  const {select} = useSelector((state: stateType) => state.guide)
  return (
    <Content>
      <div>Header {select}</div>
    </Content>
  )
}
// * --------------------------------------------------*
const Content = styled.section`
  color: 'red';
  background-color: gold;
  //content
  div.content {
  }
`
