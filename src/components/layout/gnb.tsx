/**
 * @name GNB
 * @description
 * @refer
 */
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  children?: JSX.Element | JSX.Element[] | undefined
}

export default function GNB({children}: Props) {
  // const
  // const isCheck = true
  const [isCheck, setIsCheck] = useState(false)
  // Icon
  return (
    <Content active={isCheck}>
      <button
        onClick={() => {
          setIsCheck(val => !val)
        }}>
        배경색토글
      </button>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/guide">가이드</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
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
  background-color: ${props => (props.active ? 'green' : 'grey')};
`
