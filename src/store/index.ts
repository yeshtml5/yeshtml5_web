/**
 * @name RootReducer
 */

import {combineReducers} from 'redux'
import counter from './modules/counter'

const rootReducer = combineReducers({
  counter,
})

export default rootReducer

/*************************************
// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
[참고]
https://kyounghwan01.github.io/blog/React/redux/redux-basic/#app%E1%84%8B%E1%85%A6-store-%E1%84%82%E1%85%A5%E1%87%82%E1%84%80%E1%85%A9-%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AB-reducer-%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC

*************************************/
