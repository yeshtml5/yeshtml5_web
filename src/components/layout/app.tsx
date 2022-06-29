/**
 * @name APP
 * @description
 * @refer
 */
import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: JSX.Element | JSX.Element[] | undefined
}
export default function App({children}: Props) {
  // Icon
  return (
    <div className="App">
      <Title>dsfds</Title>
      {children}
    </div>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
