import Header from '../components/organisms/Header'
import Footer from "../components/organisms/Footer"
import DireitosAutorais from "../components/organisms/DireitosAutorais"

import Carousel from "../components/molecules/Carousel"
import ProdutosCamaragibe from "../components/molecules/ProdutosCamaragibe"
import NossosProjetos from "../components/molecules/NossosProjetos"
import SomosESG from "../components/molecules/SomosESG"
import UltimasNoticias from "../components/molecules/UltimasNoticias"


function Home() {

  return (
    <div>
      <Header />
      <Carousel />
      <ProdutosCamaragibe />
      <NossosProjetos />
      <SomosESG />
      <UltimasNoticias />
      <Footer />
      <DireitosAutorais />
    </div>
  )
}

export default Home
