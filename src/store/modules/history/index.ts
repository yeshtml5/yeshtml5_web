// historyStore.ts

import {createSlice} from '@reduxjs/toolkit'
import {dispatchType, stateType} from 'store/type'

// state 타입 지정
interface State {
  title: string
  month: string
  loading: boolean
  data: object
}

const initialState: State = {
  title: '리덕스 툴킷!!',
  month: '6월',
  loading: false,
  data: {},
}

const historySlice = createSlice({
  name: 'history', // 액션타입의 이름이 중복되는것을 막기위한 네임값
  initialState, // 리듀서에서 사용되는 initialState
  reducers: {
    // 리듀서
    setTitle(state: stateType, action: dispatchType) {
      state.loading = true
      alert(JSON.stringify(action, null, 1))
      state.title = action.payload // immer가 내장 되어있어 알아서 불변성을 지켜준다.
    },
    setData(state: stateType, action: dispatchType) {
      state.data = action.payload
    },
    setOpen(state) {
      state.loading = false
    },
  },
})
//*-----------------------------------------
export default historySlice.reducer
export const {setTitle, setData} = historySlice.actions
