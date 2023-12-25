import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Main from "../../components/Main"
import Sidebar from "../../components/Sidebar"


function Home() {
  return (
    <>
    <Header />
      <div className="main__wrap">
      <Sidebar/>
      </div>
      <Main/>
      <Footer />
    </>
  )
}

export default Home
