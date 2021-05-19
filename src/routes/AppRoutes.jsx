import { Routes, Route, Link, Outlet, useNavigate, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Home from '../Home';

import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';
import Profile from '../users/Profile';

import VideoShow from '../videos/VideoShow';
import Videos from '../videos/Videos';
import VideosForm from '../videos/VideosForm';

import { signOut } from '../store/user';

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

    const logOut = () => {
        dispatch(
            signOut()
        );
        navigate('/users/signin');
    }
    return (
        <>
            {/* El componente asignado al prop element del Route anidado se sustituira por el componente Outlet */}
            <Outlet />
        </>
    );
}

const AppRoutes = () => {

    // Recupera la informacion del usuario del store de Redux.
    const user = useSelector(state => state.userStore.user);

    return (
        <Routes> {/* Routes: permite definir grupos de rutas. */}

            {/* Route: permite definir la ruta y el componente que se mostrara en esa ruta. */}
            <Route path="/" element={<Home />} />

            {/* 
        Navigate: indica a cual ruta se debe navegar.
        <Route path="/users" element={<Navigate to="/" />} >
        */}

            {/* Rutas para el usuario. */}
            <Route path="/users" element={user ? <Navigate to="/videos" /> : <Outlet />} >
                {/* Rutas anidadas */}
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path="" element={user ? <Outlet /> : <Navigate to="/users/signin" />}>
                <Route path="/users/profile" element={<Profile />} />
                <Route path="/users/:id/videos" element={<NotImplemented />} />

                {/* Rutas para los videos. */}
                <Route path="/videos">
                    <Route path="/" element={<Videos />} />
                    <Route path=":id" element={<VideoShow />} />
                    <Route path="add" element={<VideosForm />} />
                </Route>

            </Route>

            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRoutes;