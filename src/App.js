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
          <Route path="/users/signin" element={<NotImplemented />} />
          <Route path="/users/signup" element={<NotImplemented />} />

          <Route path="/users/:id" element={<NotImplemented />} />
          <Route path="/users/:id/videos" element={<NotImplemented />} />
        </Routes>

        {/* Rutas para los videos. */}
        <Routes>
          <Route path="/videos" element={<NotImplemented />} />
          <Route path="/videos/add" element={<NotImplemented />} />
          <Route path="/videos/:id" element={<NotImplemented />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
