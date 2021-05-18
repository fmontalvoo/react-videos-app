import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Player from './Player';
import { getVideo } from '../store/videos';

const Video = () => {
    // Recupera el id del video de la ruta.
    const { id } = useParams();

    const dispatch = useDispatch();

    // Recupera el video que corresponde al id de la ruta.
    const currentVideo = useSelector(state => state.videosStore.currentVideo);

    // Se ejecuta al inicio del componente.
    useEffect(
        () => {
            dispatch(
                getVideo(id)
            );
        }, []);

    return (
        <div>
            {
                currentVideo
                &&
                <>
                    <h2>{currentVideo.title}</h2>
                    <Player video={currentVideo} />
                </>
            }
        </div>
    );
}

export default Video;