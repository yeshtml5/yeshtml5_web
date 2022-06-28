/**
 * @name RootReducer
 */

import {configureStore} from '@reduxjs/toolkit'
// modules
import guideReducer from './modules/_guide'
import historyReducer from './modules/history'

// 스토어 객체를 만든다.
export const store = configureStore({
  reducer: {
    guide: guideReducer, //*------------------- 가이드
    history: historyReducer, //*---------------
  },
})

/*************************************
[참고]
https://redux-toolkit.js.org/tutorials/typescript



*************************************/
