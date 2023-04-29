import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper"
import todoReducer from "@/modules/todo/todoSlice"

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: ["todo.data"],
        })
      ),
  })
)

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export const wrapper = createWrapper(makeStore)
