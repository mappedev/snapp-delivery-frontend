import type { NextPage } from 'next'
import 'styles/globals.css'

interface IProps {
  Component: any
  pageProps: any
}

export default function MyApp({ Component, pageProps }: IProps) {
const getLayout = Component.getLayout || ((page: NextPage) => page)

  return getLayout(<Component {...pageProps} />)
}
