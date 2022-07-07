/**
 * @name Guide
 */
import {createSlice} from '@reduxjs/toolkit'
import {dispatchType, stateType} from 'store/type'

type StateType = {
  isCheck: boolean
  [key: string]: any
}
//*-----------------------------------------
const initialState: StateType = {
  isCheck: false,
}
const globalSlice = createSlice({
  name: 'guide', //---------------- 네임스페이스
  initialState, //----------------- 초기값
  reducers: {
    setIsCheck(state: stateType, action: dispatchType) {
      state.isCheck = action.payload
    },
  },
})
//*-----------------------------------------
export default globalSlice.reducer
export const {setIsCheck} = globalSlice.actions

/**********************************
// redux
const dispatch = useDispatch()
const {isCheck} = useSelector((state: stateType) => state.global)

***********************************/
