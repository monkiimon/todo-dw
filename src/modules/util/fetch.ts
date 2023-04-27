import axios, { AxiosError, AxiosRequestConfig } from "axios"

const apiGet = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const BASE_URL_API = process.env.NEXT_PUBLIC_API_END_POINT
    const res = await axios.get(BASE_URL_API + url, config)
    return res.data
  } catch (error) {
    return { error }
  }
}

const apiPost = async (
  url: string,
  objData?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_END_POINT + url,
      objData,
      config
    )
    return res.data
  } catch (error) {
    const err = error as AxiosError
    alert("Something went wrong : " + err.message)
    return { error }
  }
}

const apiPut = async (
  url: string,
  objData: any,
  config?: AxiosRequestConfig
) => {
  try {
    const res = await axios.put(
      process.env.NEXT_PUBLIC_API_END_POINT + url,
      objData,
      config
    )

    return res.data
  } catch (error) {
    const err = error as AxiosError
    alert("Something went wrong : " + err.message)
    return { error }
  }
}
const apiDelete = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const res = await axios.delete(
      process.env.NEXT_PUBLIC_API_END_POINT + url,
      config
    )
    return res.data
  } catch (error) {
    const err = error as AxiosError
    alert("Something went wrong : " + err.message)
    return { error }
  }
}

const apiPatch = async (
  url: string,
  objData: any,
  config?: AxiosRequestConfig
) => {
  try {
    const res = await axios.patch(
      process.env.NEXT_PUBLIC_API_END_POINT + url,
      objData,
      config
    )

    return res.data
  } catch (error) {
    const err = error as AxiosError
    alert("Something went wrong : " + err.message)
    return { error }
  }
}

const axiosAPI = {
  apiGet,
  apiPost,
  apiDelete,
  apiPut,
  apiPatch,
}
export default axiosAPI
