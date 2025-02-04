import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import BeritaPage from "./Pages/BeritaPage"
import InfografisPage from "./Pages/InfografisPage"
import ProfildesaPage from "./Pages/ProfildesaPage"
import BelanjaPage from "./Pages/BelanjaPage"
import NavbarComponent from "./Components/NavbarComponent"
import FooterComponent from "./Components/FooterComponent"
import GaleriPage from "./Pages/GaleriPage"
import MabelSupri from "./Pages2/MabelSupri"
import KeripikbuFeb from "./Pages2/KeripikbuFeb"
import KueNoer from "./Pages2/KueNoer"
import KeripikmasFarhan from "./Pages2/keripikmasfarhan"
import TempepakPogo from "./Pages2/TempepakPogo"
import Berita1 from "./Pages3/Berita1"
import Berita2 from "./Pages3/Berita2"
import Berita3 from "./Pages3/Berita3"
import Berita4 from "./Pages3/Berita4"
import Berita5 from "./Pages3/Berita5"
import Berita6 from "./Pages3/Berita6"
import Berita7 from "./Pages3/Berita7"
import Berita8 from "./Pages3/Berita8"
import Berita9 from "./Pages3/Berita9"



function App() {
  return ( 
  <div>
    <NavbarComponent />
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/berita" Component={BeritaPage}/>
      <Route path="/infografis" Component={InfografisPage}/>
      <Route path="/belanja" Component={BelanjaPage}/>
      <Route path="/profildesa" Component={ProfildesaPage}/>
      <Route path="/galeripage" element={<GaleriPage />} />
      <Route path="/mabel/:id" element={<MabelSupri />} />
      <Route path="/keripikbufeb/:id" element={<KeripikbuFeb />} />
      <Route path="/kuenoer/:id" element={<KueNoer />} />
      <Route path="/keripikmasfarhan/:id" element={<KeripikmasFarhan />} />
      <Route path="/tempepakpogo/:id" element={<TempepakPogo/>}/>
      <Route path="/berita1/:id" element={<Berita1 />} />
      <Route path="/berita2/:id" element={<Berita2 />} />
      <Route path="/berita3/:id" element={<Berita3 />} />
      <Route path="/berita4/:id" element={<Berita4 />} />
      <Route path="/berita5/:id" element={<Berita5 />} />
      <Route path="/berita6/:id" element={<Berita6 />} />
      <Route path="/berita7/:id" element={<Berita7 />} />
      <Route path="/berita8/:id" element={<Berita8 />} />
      <Route path="/berita9/:id" element={<Berita9 />} />
    </Routes>
    <FooterComponent />
  </div>
  )
}

export default App
