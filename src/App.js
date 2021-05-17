import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const NotImplemented = () => (
  <div>
    {/* Link: permite navegar entre componentes sin refrescar el navegador. */}
    <Link to='/videos'>ir a videos</Link>
    <h1>Esta página aún no esta lista</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* BrowserRouter: maneja las rutas en el navegador. */}
      <BrowserRouter>
        {/* Routes: permite definir grupos de rutas. */}
        <Routes>
          {/* Route: permite definir la ruta y el componente que se mostrara en esa ruta. */}
          <Route path="/" element={<NotImplemented />} />
        </Routes>

        {/* Rutas para el usuario. */}
        <Routes>
          {/* Rutas anidadas */}
          <Route path="/users">
            <Route path="signin" element={<NotImplemented />} />
            <Route path="signup" element={<NotImplemented />} />

            <Route path=":id" element={<NotImplemented />} />
            <Route path=":id/videos" element={<NotImplemented />} />
          </Route>
        </Routes>

        {/* Rutas para los videos. */}
        <Routes>
          <Route path="/videos">
            <Route path="/" element={<NotImplemented />} />
            <Route path="add" element={<NotImplemented />} />
            <Route path=":id" element={<NotImplemented />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
