import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getEntireRoomList } from '@/service'

export const fetchRoomListAction = createAsyncThunk('fetchRoomList', (page, { dispatch }) => {
  dispatch(changeCurrentPageAction(page))
  dispatch(changeIsLoadingAction(true))
  getEntireRoomList(page * 20).then(res => {
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }).finally(() => {
    dispatch(changeIsLoadingAction(false))
  })
})

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    },
  }
})


export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
  changeIsLoadingAction
} = entireSlice.actions
export default entireSlice.reducer