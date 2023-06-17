import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Dulich from "./pages/Dulich";
import KienTruc from "./pages/KienTruc";
import ThienNhien from "./pages/ThienNhien";
import CaPhe from "./pages/CaPhe";
import AmThuc from "./pages/AmThuc";
import LuuTru from "./pages/LuuTru";
import Contact from "./pages/Contact";
import QueGarden from "./components/DuLich/QueGarden";
import HoXuanHuong from "./components/ThienNhien/HoXuanHuong";
import HoTuyenLam from "./components/ThienNhien/HoTuyenLam";
import DoiDaPhu from "./components/ThienNhien/DoiDaPhu";
import DoiChe from "./components/ThienNhien/DoiChe";
import ThacAnkroet from "./components/ThienNhien/ThacAnkroet";
import DoiCoHong from "./components/ThienNhien/DoiCoHong";
import ThacDatanla from "./components/DuLich/ThacDatanla";
import LangBiang from "./components/DuLich/LangBiang";
import ThungLung from "./components/DuLich/ThungLung";
import VuonAnhSang from "./components/DuLich/VuonAnhSang";
import Robin from "./components/DuLich/Robin";
import Dinh1 from "./components/KienTruc/Dinh1";
import BietThuHangNga from "./components/KienTruc/BietThuHangNga";
import Dinh3 from "./components/KienTruc/Dinh3";
import NhaTho from "./components/KienTruc/NhaTho";
import GaDaLat from "./components/KienTruc/GaDaLat";
import ChuaLinhPhuc from "./components/KienTruc/ChuaLinhPhuc";
import Palace from "./components/LuuTru/Palace";
import Colline from "./components/LuuTru/Colline";
import Ladalat from "./components/LuuTru/Ladalat";
import Lalaland from "./components/LuuTru/Lalaland";
import Terracotta from "./components/LuuTru/Terracotta";
import Wonder from "./components/LuuTru/Wonder";
import BanhCan from "./components/AmThuc/BanhCan";
import BuffetRau from "./components/AmThuc/BuffetRau";
import ChoDem from "./components/AmThuc/ChoDem";
import LauBo from "./components/AmThuc/LauBo";
import LauGa from "./components/AmThuc/LauGa";
import NemNuong from "./components/AmThuc/NemNuong";
import Camp from "./components/CaPhe/Camp";
import Lululola from "./components/CaPhe/Lululola";
import LungChung from "./components/CaPhe/LungChung";
import MeLinh from "./components/CaPhe/MeLinh";
import MountainView from "./components/CaPhe/MountainView";
import TuiMoTo from "./components/CaPhe/TuiMoTo";
import AdminHome from "./pages/admin/AdminHome";
import NotFound from "./components/NotFound";



function App() {
  return (
    <BrowserRouter>
    <Routes>
          
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />

    <Route path="/duLich" element={<Dulich />} />
    <Route path="/duLich/queGarden" element={<QueGarden />} />
    <Route path="/duLich/thacDatanla" element={<ThacDatanla />} />
    <Route path="/duLich/langbiang" element={<LangBiang />} />
    <Route path="/duLich/thungLungTinhYeu" element={<ThungLung />} />
    <Route path="/duLich/vuonAnhSang" element={<VuonAnhSang />} />
    <Route path="/duLich/robin" element={<Robin />} />

    <Route path="/kienTruc" element={<KienTruc />} />
    <Route path="/kienTruc/dinh1" element={<Dinh1 />} />
    <Route path="/kienTruc/bietThuHN" element={<BietThuHangNga />} />
    <Route path="/kienTruc/dinh3" element={<Dinh3 />} />
    <Route path="/kienTruc/nhaThoConGa" element={<NhaTho />} />
    <Route path="/kienTruc/gaDaLat" element={<GaDaLat />} />
    <Route path="/kienTruc/chuaLinhPhuoc" element={<ChuaLinhPhuc />} />

    <Route path="/thienNhien" element={<ThienNhien />} />
    <Route path="/thienNhien/hoXuanHuong" element={<HoXuanHuong />} />
    <Route path="/thienNhien/hoTuyenLam" element={<HoTuyenLam />} />
    <Route path="/thienNhien/doiDaPhu" element={<DoiDaPhu />} />
    <Route path="/thienNhien/doiCheCauDat" element={<DoiChe />} />
    <Route path="/thienNhien/thacAnkroet" element={<ThacAnkroet />} />
    <Route path="/thienNhien/doiCoHong" element={<DoiCoHong />} />

    <Route path="/caPhe" element={<CaPhe />} />
    <Route path="/caPhe/camp" element={<Camp />} />
    <Route path="/caPhe/lululola" element={<Lululola />} />
    <Route path="/caPhe/lungChung" element={<LungChung />} />
    <Route path="/caPhe/meLinh" element={<MeLinh />} />
    <Route path="/caPhe/muontainView" element={<MountainView />} />
    <Route path="/caPhe/tuiMoTo" element={<TuiMoTo />} />

    <Route path="/amThuc" element={<AmThuc />} />
    <Route path="/amThuc/banhCan" element={<BanhCan />} />
    <Route path="/amThuc/leguda" element={<BuffetRau />} />
    <Route path="/amThuc/choDem" element={<ChoDem />} />
    <Route path="/amThuc/lauBo" element={<LauBo />} />
    <Route path="/amThuc/lauGa" element={<LauGa />} />
    <Route path="/amThuc/nemNuong" element={<NemNuong />} />

    <Route path="/luuTru" element={<LuuTru />} />
    <Route path="/luuTru/palace" element={<Palace />} />
    <Route path="/luuTru/colline" element={<Colline />} />
    <Route path="/luuTru/ladalat" element={<Ladalat />} />
    <Route path="/luuTru/lalaland" element={<Lalaland />} />
    <Route path="/luuTru/terracotta" element={<Terracotta />} />
    <Route path="/luuTru/woder" element={<Wonder />} />


    <Route path="/contact" element={<Contact />} />
    <Route path="/admin" element={<AdminHome />} />
   
   
    <Route path="/*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
