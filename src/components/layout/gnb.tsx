/**
 * @name GNB
 * @description
 * @refer
 */
import {debug} from 'lib'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {setIsCheck} from 'store/modules/global'
import {stateType} from 'store/type'
import styled from 'styled-components'

type Props = {
  children?: JSX.Element | JSX.Element[] | undefined
}

export default function GNB({children}: Props) {
  // const
  // redux
  const dispatch = useDispatch()
  const {isCheck} = useSelector((state: stateType) => state.global)
  // const isCheck = true
  // const [isCheck, setIsCheck] = useState(false)
  // Icon
  return (
    <Content active={isCheck}>
      <button
        className="toggle"
        onClick={() => {
          dispatch(setIsCheck(!isCheck))
        }}>
        배경색토글
      </button>
      {debug(isCheck)}
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
  background-color: ${props => (props.active ? '#EEE' : '#111')};
  color: ${props => (props.active ? '#111' : '#fff')};
  .toggle {
    width: 100%;
    background: #ff0000;
    padding: 10px 20px;
    font-size: 14px;
  }
  ul li {
    padding: 10px 20px;
    border-bottom: 1px solid #111;
  }
`
