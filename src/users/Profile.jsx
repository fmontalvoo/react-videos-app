import { useEffect } from 'react';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Player from '../videos/Player';

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
        <div>
            {
                // Lista todos los videos del storage de Redux.
                videos
                    .map(
                        video => (
                            <div key={video.id}>
                                <h2>{video.title}</h2>
                                <Player video={video} />
                            </div>
                        )
                    )
            }
        </div>
    );
}

export default Profile;