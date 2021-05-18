import { useForm } from "react-hook-form";

const VideosForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // Para subir archivos desde javascript es necesario utilizar FormData.
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('video', data.video[0]);

        console.log(formData);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="title" {...register('title', { required: true })} placeholder="Título" />
            <input type="file" name="video" {...register('video', { required: true })} />
            <input type="submit" value="Subir" />
        </form>
    );
}

export default VideosForm;