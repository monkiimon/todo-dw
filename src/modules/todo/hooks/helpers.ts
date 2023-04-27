import { fetch } from "@/modules/util"

const fetcher = (url: string) => fetch.apiGet(url).then((res) => res)

export { fetcher }
