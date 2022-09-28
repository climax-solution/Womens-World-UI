import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children , Title}) => {
  return (
    <>
        <Header Title={Title} />
        {children}
        <Footer/>
    </>
  )
}

export default Layout