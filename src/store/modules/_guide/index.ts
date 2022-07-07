/**
 * @name Guide
 */
import {createSlice} from '@reduxjs/toolkit'
import {dispatchType, stateType} from 'store/type'

type StateType = {
  title: string
  loading?: boolean
  select?: number
  fetch_data?: any //-----------fetched
  [key: string]: any
}
//*-----------------------------------------
const initialState: StateType = {
  title: 'title_init',
}
const guideSlice = createSlice({
  name: 'guide', //---------------- 네임스페이스
  initialState, //----------------- 초기값
  reducers: {
    setFetch(state: stateType, action: dispatchType) {
      state.loading = false
      state.fetch_data = action.payload
    },
    setSelect(state: stateType, action: dispatchType) {
      state.select = action.payload
    },
  },
})
//*-----------------------------------------
export default guideSlice.reducer
export const {setSelect, setFetch} = guideSlice.actions
//*----------------------------------------- const
export const GUIDE = {
  SELECT: 'SELECT',
}
