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
  // const
  const isCheck = true
  // Icon
  return (
    <Content active={isCheck}>
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
const Content = styled.div<any>`
  width: 200px;
  background-color: ${(props) => (props.active ? 'green' : 'red')};
`
