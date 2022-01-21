import { ReactNode } from "react"
import { Header } from "components/layouts/Main/Header"
import { Footer } from "components/layouts/Main/Footer"

interface IProps {
  children: ReactNode
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <main className="relative min-h-screen max-w-7xl mx-auto overflow-x-hidden">
      <div className="mx-5">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  )
}