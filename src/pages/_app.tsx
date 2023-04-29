import "normalize.css/normalize.css"
import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { wrapper } from "../store/store"

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
