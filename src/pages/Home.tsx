import Carousel from "../components/molecules/Carousel"
import ProdutosCamaragibe from "../components/molecules/ProdutosCamaragibe"
import NossosProjetos from "../components/molecules/NossosProjetos"
import SomosESG from "../components/molecules/SomosESG"
import UltimasNoticiasHome from "../components/molecules/UltimasNoticiasHome"


function Home() {

  return (
    <div>
      <Carousel />
      <ProdutosCamaragibe />
      <NossosProjetos />
      <SomosESG />
      <UltimasNoticiasHome />
    </div>
  )
}

export default Home
