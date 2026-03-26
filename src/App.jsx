import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import InicioPage from './pages/InicioPage';
import UsuariosPage from './pages/UsuariosPage';
import ProductosPage from './pages/ProductosPage';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <Menu />

      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/vendedores" element={<ProductosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
      </Routes>
    </div>
  );
}

export default App;