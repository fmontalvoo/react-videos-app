import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getVideo } from '../store/videos';
import Player from './Player';

const Video = () => {
    // Recupera el id del video de la ruta.
    const { id } = useParams();

    const dispatch = useDispatch();

    // Recupera el store de videos de Redux.
    const currentVideo = useSelector(state => state.videosStore.currentVideo);

    // Se ejecuta al inicio del componente.
    useEffect(
        () => {
            dispatch(
                getVideo(id)
            );
        },
        []
    );

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