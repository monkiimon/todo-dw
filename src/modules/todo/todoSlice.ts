import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "@/store/store"

export interface TodoSliceProps {
  data: TodoType[]
}
export interface TodoType {
  id: string
  title: string
  completed: boolean
}
const initialState: TodoSliceProps = {
  data: [],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodosData: (state, action) => {
      state.data = action.payload.data
    },
    removeTodosData: (state) => {
      state = initialState
    },
  },
  extraReducers(builder) {
    builder.addCase<typeof HYDRATE, PayloadAction<AppState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => {
        return { ...state, ...payload.todo }
      }
    )
  },
})

export const { addTodosData, removeTodosData } = todoSlice.actions
export default todoSlice.reducer
