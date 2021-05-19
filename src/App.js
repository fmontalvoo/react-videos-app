import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';

import AppRoutes from './routes/AppRoutes';

import { persistor, store } from './store';

import theme, { GlobalStyles } from './themes/theme';


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
            {/* ThemeProvider: establece el tema que utilizara toda la aplicacion. */}
            <ThemeProvider theme={theme}>
              {/* GlobalStyles: aplica estilos de forma global para la aplicacion. */}
              <GlobalStyles />
              {/* Layout: aplica el tema a todos los componentes en su interior.*/}
              <Layout>

                <AppRoutes />

              </Layout>

            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
