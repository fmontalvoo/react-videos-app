import { useDispatch, useSelector } from "react-redux";

import { signIn, signOut, signUp } from "../store/user";

const SignIn = () => {
    const dispatch = useDispatch();

    const logIn = () => {
        // Ejecuta el la accion que llama al reducer signIn del estado del usuario. 
        dispatch(
            // Asigna informacion nueva al usuario.
            signIn({
                email: 'fgmo@email.com',
                jwt: 'abc123./'
            })
        );
    }

    const createAccount = () => {
        // Ejecuta el la accion que llama al reducer signUp del estado del usuario. 
        dispatch(
            // Asigna informacion nueva al usuario.
            signUp({
                credentials: {
                    username: 'fgmo',
                    email: 'fgmo@email.com',
                    password: 'abc123./'
                }
            })
        );
    }

    const logOut = () => {
        // Ejecuta el la accion que llama al reducer signOut del estado del usuario. 
        dispatch(
            // Borra la informacion del usuario.
            signOut()
        );
    }

    // Accede a la informacion del usuario almacenada en el estado de Redux.
    const user = useSelector(state => state.userStore.user);
    console.log(user);

    return (
        <div>
            {
                user ? <button onClick={logOut} >Cerrar sesión</button>
                    : <button onClick={createAccount} >Crear cuenta</button>
            }
        </div>
    );
}

export default SignIn;