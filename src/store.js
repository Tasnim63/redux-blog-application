import { configureStore } from '@reduxjs/toolkit'
import usersReducers from './features/comments/CommentSlice'
export const store = configureStore({
  reducer: {
    comments : usersReducers
  },
})