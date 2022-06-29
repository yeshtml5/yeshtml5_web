/**
 * @name GNB
 * @description
 * @refer
 */
import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: JSX.Element | JSX.Element[] | undefined
}
export default function GNB({children}: Props) {
  // Icon
  return (
    <Content>
      <div>12121</div>
      <div>12121</div>
      <div>12121</div>
      <div>12121</div>
      <div>12121</div>
      {children}
    </Content>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
const Content = styled.div`
  width: 200px;
  background-color: #ff0000;
`
