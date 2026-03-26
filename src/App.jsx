import { useState } from 'react';
import UsuariosList from './components/UsuariosList';
import UsuarioForm from './components/UsuarioForm';
import ProductosList from './components/ProductosList';
import ProductoForm from './components/ProductoForm';

function App() {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [recargarUsuarios, setRecargarUsuarios] = useState(0);

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [recargarProductos, setRecargarProductos] = useState(0);

  function handleEditUsuario(usuario) {
    setUsuarioSeleccionado(usuario);
  }

  function handleSuccessUsuario() {
    setUsuarioSeleccionado(null);
    setRecargarUsuarios((prev) => prev + 1);
  }

  function handleCancelUsuario() {
    setUsuarioSeleccionado(null);
  }

  function handleEditProducto(producto) {
    setProductoSeleccionado(producto);
  }

  function handleSuccessProducto() {
    setProductoSeleccionado(null);
    setRecargarProductos((prev) => prev + 1);
  }

  function handleCancelProducto() {
    setProductoSeleccionado(null);
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Gestión de usuarios y productos (React + Express)</h1>

      <hr />

      <section style={{ marginBottom: '2rem' }}>
        <h2>Sección de usuarios</h2>
        <UsuarioForm
          usuarioSeleccionado={usuarioSeleccionado}
          onSuccess={handleSuccessUsuario}
          onCancel={handleCancelUsuario}
        />
        <UsuariosList
          key={recargarUsuarios}
          onEdit={handleEditUsuario}
        />
      </section>

      <hr />

      <section>
        <h2>Sección de productos</h2>
        <ProductoForm
          productoSeleccionado={productoSeleccionado}
          onSuccess={handleSuccessProducto}
          onCancel={handleCancelProducto}
        />
        <ProductosList
          key={recargarProductos}
          onEdit={handleEditProducto}
        />
      </section>
    </div>
  );
}

export default App;