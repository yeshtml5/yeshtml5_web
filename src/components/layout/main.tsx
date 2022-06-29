/**
 * @name APP
 * @description
 * @refer
 */
import React from 'react'
import styled from 'styled-components'
import {Gnb} from '.'
// contents

type Props = {
  children?: JSX.Element | JSX.Element[] | undefined
}
export default function Layout({children}: Props) {
  // Icon
  return (
    <Main>
      {/* GNB */}
      <Gnb />
      <div className="content">{children}</div>
    </Main>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
const Main = styled.main`
  display: flex;
  flex-direction: row;
  //content
  div.content {
  }
`
