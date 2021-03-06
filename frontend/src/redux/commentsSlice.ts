import { createSlice } from '@reduxjs/toolkit'

/* slice */

const initialState = {
  commentsArr: Array(0),
  commentObj: {},
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addNewComments: (state, action) => {
      // return [...state.commentsArr, ...action.payload]
      action.payload.map((item: any) => state.commentsArr.push(item))
    },
    getComment(state, action) {
        state.commentObj=action.payload
    },
  },
})

export const { addNewComments, getComment } = commentsSlice.actions
export default commentsSlice.reducer
export const commentsReducer = commentsSlice.reducer
