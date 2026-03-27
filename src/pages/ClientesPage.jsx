import { useState } from 'react';
import ClientesList from '../components/ClientesList';
import ClienteForm from '../components/ClienteForm';

function ClientesPage() {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [recargarLista, setRecargarLista] = useState(false);

  function handleEdit(cliente) {
    setClienteSeleccionado(cliente);
  }

  function handleSuccess() {
    setClienteSeleccionado(null);
    setRecargarLista(!recargarLista);
  }

  function handleCancel() {
    setClienteSeleccionado(null);
  }

  return (
    <div>
      <h1>Gestión de Clientes</h1>
      
      <ClienteForm
        clienteSeleccionado={clienteSeleccionado}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
      
      <hr />
      
      <ClientesList
        key={recargarLista}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default ClientesPage;