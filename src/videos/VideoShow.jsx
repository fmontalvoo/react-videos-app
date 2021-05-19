import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Video from './Video';
import { SmallContainer } from '../themes/theme';

import { getVideo } from '../store/videos';

const VideoShow = () => {
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
        <SmallContainer>
            {
                currentVideo
                &&
                <Video video={currentVideo} />
            }
        </SmallContainer>
    );
}

export default VideoShow;