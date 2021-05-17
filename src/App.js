import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => <h1>¡Hola Mundo!</h1>;

function App() {
  return (
    <div>
      {/* BrowserRouter: maneja las rutas en el navegador. */}
      <BrowserRouter>
        {/* Routes: permite definir grupos de rutas. */}
        <Routes>
          {/* Route: permite definir la ruta y el componente que se mostrara en esa ruta. */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
