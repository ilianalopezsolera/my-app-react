import { useState } from 'react';
import ProveedoresList from '../components/ProveedoresList';
import ProveedorForm from '../components/ProveedorForm';

function ProveedoresPage() {
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
  const [recargarLista, setRecargarLista] = useState(false);

  function handleEdit(proveedor) {
    setProveedorSeleccionado(proveedor);
  }

  function handleSuccess() {
    setProveedorSeleccionado(null);
    setRecargarLista(!recargarLista);
  }

  function handleCancel() {
    setProveedorSeleccionado(null);
  }

  return (
    <div>
      <h1>Gestión de Proveedores</h1>
      
      <ProveedorForm
        proveedorSeleccionado={proveedorSeleccionado}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
      
      <hr />
      
      <ProveedoresList
        key={recargarLista}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default ProveedoresPage;