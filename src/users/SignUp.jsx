import { useForm } from "react-hook-form";

import { useNavigate } from 'react-router-dom';

import { useDispatch } from "react-redux";

import UserFormLayout from "./UserFormLayout";
import AppInput from "../components/AppInput";

import { AppButton } from "../themes/theme";

import { signUp } from "../store/user";


const SignUp = () => {
    // Permite llamar/ejecutar los reducers para cambiar el estado de la aplicacion.
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await dispatch(
            signUp({ credentials: data })
        );
        navigate('/videos');
    }

    return (
        <UserFormLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput type="text" register={register('username', { required: true })} label="Nombre de usuario" />
                <AppInput type="email" register={register('email', { required: true })} label="Correo eletr&oacute;nico" />
                <AppInput type="password" register={register('password', { required: true })} label="Contrase&ntilde;a" />
                <AppButton type="submit">Crear cuenta</AppButton>
            </form>
        </UserFormLayout>
    );
}

export default SignUp;