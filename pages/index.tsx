import { ReactNode } from 'react'
import { MainLayout } from 'layouts/Main'
import { Hero } from 'components/pages/home/Hero'

export default function Home() {
  return <Hero />
}

Home.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)
