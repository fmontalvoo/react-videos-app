import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet, Navigate, useParams } from 'react-router-dom';

import { Provider } from 'react-redux'

import { store } from './store';

const NotImplemented = () => (
  <div>
    {/* Link: permite navegar entre componentes sin refrescar el navegador. */}
    <Link to='/videos'>ir a videos</Link>
    <h1>Esta página aún no esta lista</h1>
  </div>
);

const Error404 = () => (
  <div>
    <Link to='/'>Volver al inicio</Link>
    <h1>404 - Página no encontrada</h1>
  </div>
);

const UsersOutlet = () => {
  const navigate = useNavigate();
  let redirect = () => {
    navigate('/'); // Navega al inicio de la pagina.
  }
  return (
    <>
      <button onClick={redirect}>Home</button>
      {/* El componente asignado al prop element del Route anidado se sustituira por el componente Outlet */}
      <Outlet />
    </>
  );
}

const Video = () => {
  // Hook para recuperar los parametros de la ruta.
  let { id } = useParams();
  return (
    <div>
      <h1>Id: {id}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* BrowserRouter: maneja las rutas en el navegador. */}
      <BrowserRouter>
        {/* Provider: permite a todos los componentes en su interior acceder al store de Redux. */}
        <Provider store={store}>
          <Routes> {/* Routes: permite definir grupos de rutas. */}

            {/* Route: permite definir la ruta y el componente que se mostrara en esa ruta. */}
            <Route path="/" element={<NotImplemented />} />

            {/* 
          Navigate: indica a cual ruta se debe navegar.
          <Route path="/users" element={<Navigate to="/" />} >
           */}
            {/* Rutas para el usuario. */}
            <Route path="/users" element={<UsersOutlet />} >
              {/* Rutas anidadas */}
              <Route path="signin" element={<NotImplemented />} />
              <Route path="signup" element={<NotImplemented />} />
              <Route path=":id" element={<NotImplemented />} />
              <Route path=":id/videos" element={<NotImplemented />} />
            </Route>

            {/* Rutas para los videos. */}
            <Route path="/videos">
              <Route path="/" element={<NotImplemented />} />
              <Route path=":id" element={<Video />} />
              <Route path="add" element={<NotImplemented />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
