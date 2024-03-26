import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PAGINAPRINCIPAL from "./pages/PAGINAPRINCIPAL";
import Documentos from "./pages/Documentos";
import PagosYResumenDelProyecto from "./pages/PagosYResumenDelProyecto";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import PAGINAPRINCIPAL1 from "./pages/PAGINAPRINCIPAL1";
import Cotizacion from "./pages/Cotizacion";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/documentos":
        title = "";
        metaDescription = "";
        break;
      case "/pagos-y-resumen-del-proyecto":
        title = "";
        metaDescription = "";
        break;
      case "/registro":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/pagina-principal2":
        title = "";
        metaDescription = "";
        break;
      case "/cotizacion":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PAGINAPRINCIPAL />} />
      <Route path="/documentos" element={<Documentos />} />
      <Route
        path="/pagos-y-resumen-del-proyecto"
        element={<PagosYResumenDelProyecto />}
      />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pagina-principal2" element={<PAGINAPRINCIPAL1 />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
    </Routes>
  );
}
export default App;
