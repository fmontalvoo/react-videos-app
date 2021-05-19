import { useEffect } from 'react';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Video from '../videos/Video';
import { SmallContainer } from '../themes/theme';

import { loadUserVideos } from '../store/videos';

const Profile = () => {

    const dispatch = useDispatch();

    // Recupera los videos del usuario.
    const videos = useSelector(state => state.videosStore.data.videos);

    useEffect(
        () => {
            dispatch(
                loadUserVideos()
            );
        }, []);

    return (
        <SmallContainer>
            {
                // Lista todos los videos del storage de Redux.
                videos
                    .map(
                        (video, index) => (
                            <Video video={video} index={index} />
                        )
                    )
            }
        </SmallContainer>
    );
}

export default Profile;