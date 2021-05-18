import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

import { Provider } from 'react-redux'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import Home from './Home';

import SignIn from './users/SignIn';
import Profile from './users/Profile';

import Video from './videos/Video';
import Videos from './videos/Videos';
import VideosForm from './videos/VideosForm';

import { signOut } from './store/user';
import { persistor, store } from './store';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Recupera la informacion del usuario del store de Redux.
  const user = useSelector(state => state.userStore.user);

  const logOut = () => {
    dispatch(
      signOut()
    );
    navigate('/users/signin');
  }
  return (
    <>
      {
        user && <button onClick={logOut} >Cerrar sesi&oacute;n</button>
      }
      {/* El componente asignado al prop element del Route anidado se sustituira por el componente Outlet */}
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div>
      {/* BrowserRouter: maneja las rutas en el navegador. */}
      <BrowserRouter>
        {/* Provider: permite a todos los componentes en su interior acceder al store de Redux. */}
        <Provider store={store}>
          {/* PersistGate: permite a todos los componentes en su interior utilizar la persistencia de datos. 
          El prop loading permite mostrar un componente mientras se recuperar la
          informacion del storage persistente */}
          <PersistGate loading={null} persistor={persistor} >
            <Routes> {/* Routes: permite definir grupos de rutas. */}

              {/* Route: permite definir la ruta y el componente que se mostrara en esa ruta. */}
              <Route path="/" element={<Home />} />

              {/* 
          Navigate: indica a cual ruta se debe navegar.
          <Route path="/users" element={<Navigate to="/" />} >
           */}

              {/* Rutas para el usuario. */}
              <Route path="/users" element={<UsersOutlet />} >
                {/* Rutas anidadas */}
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<NotImplemented />} />
                <Route path="profile" element={<Profile />} />
                <Route path=":id/videos" element={<NotImplemented />} />
              </Route>

              {/* Rutas para los videos. */}
              <Route path="/videos">
                <Route path="/" element={<Videos />} />
                <Route path=":id" element={<Video />} />
                <Route path="add" element={<VideosForm />} />
              </Route>

              <Route path="*" element={<Error404 />} />
            </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
