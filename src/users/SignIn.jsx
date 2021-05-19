import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import UserFormLayout from "./UserFormLayout";
import AppInput from "../components/AppInput";

import { AppButton } from "../themes/theme";

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
        <UserFormLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput type="email" register={register('email', { required: true })} label="Correo eletr&oacute;nico" />
                <AppInput type="password" register={register('password', { required: true })} label="Contrase&ntilde;a" />
                <AppButton type="submit">Iniciar sesi&oacute;n</AppButton>
            </form>
        </UserFormLayout>
    );
}

export default SignIn;