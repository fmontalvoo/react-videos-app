import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import styled from "styled-components";

import AppInput, { Fieldset } from "../components/AppInput";
import { AppButton, CenteredContainer, SmallContainer as SmallContainerTemplate } from "../themes/theme";

import { uploadVideos } from "../store/videos";


let SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

const VideosForm = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // Para subir archivos desde javascript es necesario utilizar FormData.
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('video', data.video[0]);

        console.log(formData);

        dispatch(
            uploadVideos(formData)
        );

    }


    return (
        <CenteredContainer>
            <SmallContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AppInput type="text" name="title" {...register('title', { required: true })} label="Título" />
                    <Fieldset>
                        <label>Archivo de video</label>
                        <input type="file" name="video" {...register('video', { required: true })} />
                    </Fieldset>
                    <AppButton type="submit" >Subir</AppButton>
                </form>
            </SmallContainer>
        </CenteredContainer>
    );
}

export default VideosForm;