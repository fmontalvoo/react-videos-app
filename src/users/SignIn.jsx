import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { signIn } from "../store/user";


const SignIn = () => {
    // Permite llamar/ejecutar los reducers para cambiar el estado de la aplicacion.
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(
            signIn({ credentials: data })
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email', { required: true })} placeholder="Correo eletr&oacute;nico" />
            <input type="password" {...register('password', { required: true })} placeholder="Contrase&ntilde;a" />
            <input type="submit" value="Iniciar sesi&oacute;n" />
        </form>
    );
}

export default SignIn;