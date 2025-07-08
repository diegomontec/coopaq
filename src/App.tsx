import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Diretoria from "./pages/Diretoria"
import NossaHistoria from "./pages/NossaHistoria"
import AgroIndustria from "./pages/AgroIndustria";
import NossosProjetos from "./pages/NossosProjetos"
import ÚltimasNotícias from './pages/ÚltimasNotícias'
import CampanhaAbrilVerde from './pages/CampanhaAbrilVerde'
import Diadecampo from './pages/Diadecampo'
import PedaladaVerde from "./pages/PedaladaVerde"
import ImersãoIntercooperação from "./pages/ImersãoIntercooperação"
import EncontroDeNegocios from "./pages/EncontroDeNegocios"
import SIPAT from './pages/SIPAT'
import ReciclaveisMaceio from "./pages/RecicláveisMaceió"
import QUALIFICACOOPAQ from "./pages/QualificaCOOPAQ"
import GestãoeLiderança from "./pages/GestãoeLiderança"
import CafeMulheresCampos from "./pages/CafeMulheresCampos"
import AssembleiaGeralOrdinaria from "./pages/AssembleiaGeralOrdinaria"
import PedalCoopaq from "./pages/PedalCoopaq"
import QualificaJovem from "./pages/QualificaJovem"
import CoopaqParceiraComOGov from "./pages/CoopaqParceiraComOGov"
import EsporteEllayny from "./pages/EsporteEllayny"
import Autoresponsabilidade from "./pages/Autoresponsabilidade"
import MarceloBrilhante from "./pages/MarceloBrilhante"
import QualificaJovemVisitamFabricaDeProcessamentoDeResiduosDeCoco from "./pages/QualificaJovemVisitamFabricaDeProcessamentoDeResiduosDeCoco"
import Arrancada2025 from "./pages/Arrancada2025"
import MidiaExterna from "./pages/MidiaExterna"
import Imunizacao from "./pages/Imunizacao";
import MatrizDelas from "./pages/MatrizDelas";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diretoria" element={<Diretoria />} />
        <Route path="/nossahistoria" element={<NossaHistoria />} />
        <Route path="/agroindustria" element={<AgroIndustria />} />
        <Route path="/nossosprojetos" element={<NossosProjetos />} />
        <Route path="midia-externa" element={<MidiaExterna />} />
        <Route path="/ultimasnoticias" element={<ÚltimasNotícias />} />
        <Route path="/campanhaabrilverde" element={<CampanhaAbrilVerde />} />
        <Route path="/diadecampo" element={<Diadecampo />} />
        <Route path="/pedaladaverde" element={<PedaladaVerde />} />
        <Route
          path="/imersaointercooperacao"
          element={<ImersãoIntercooperação />}
        />
        <Route path="/encontrodenegocios" element={<EncontroDeNegocios />} />
        <Route path="/SIPAT" element={<SIPAT />} />
        <Route
          path="/doacaodemateriaisreciclaveisparacooperativademaceio"
          element={<ReciclaveisMaceio />}
        />
        <Route path="/qualificacoopaq" element={<QUALIFICACOOPAQ />} />
        <Route path="/gestãoeliderança" element={<GestãoeLiderança />} />
        <Route
          path="/cafecommulheresdocampo"
          element={<CafeMulheresCampos />}
        />
        <Route
          path="/assembleiageralordinaria"
          element={<AssembleiaGeralOrdinaria />}
        />
        <Route path="/pedalcoopaq" element={<PedalCoopaq />} />
        <Route path="/qualificajovem" element={<QualificaJovem />} />
        <Route
          path="/coopaqemparceriacomogov"
          element={<CoopaqParceiraComOGov />}
        />
        <Route path="/esporteellayny" element={<EsporteEllayny />} />
        <Route
          path="/autoresponsabilidade"
          element={<Autoresponsabilidade />}
        />
        <Route path="/marcelobrilhante" element={<MarceloBrilhante />} />
        <Route
          path="/qualificajovemvisitamfabricadeprocessamentoderesiduosdecoco"
          element={
            <QualificaJovemVisitamFabricaDeProcessamentoDeResiduosDeCoco />
          }
        />
        <Route path="/arrancada2025" element={<Arrancada2025 />} />
        <Route path="/imunizacao" element={<Imunizacao />} />
        <Route path="/matriz-delas" element={<MatrizDelas />} />
      </Routes>
    </Router>
  );
}

export default App
