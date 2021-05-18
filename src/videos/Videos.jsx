import { useEffect } from 'react';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Player from './Player';

import { loadVideos } from "../store/videos";
import { likeVideo } from '../store/like';




const Videos = () => {
    const dispatch = useDispatch();

    // Recupera el store de videos de Redux.
    const videosState = useSelector(state => state.videosStore);

    useEffect(
        () => {
            dispatch(loadVideos());
        },
        []
    );

    const like = (id) => {
        dispatch(
            likeVideo(id)
        );
    }

    return (
        <div>
            {
                // Lista todos los videos del storage de Redux.
                videosState.data.videos
                    .map(
                        video => (
                            <div key={video.id}>
                                <h2>{video.title}</h2>
                                <Player video={video} />
                                <button onClick={() => like(video.id)}
                                    style={{ backgroundColor: (video.isLikedByCurrentUser ? 'blue' : 'inherit') }} >Like</button>
                            </div>
                        )
                    )
            }
        </div>
    );
}

export default Videos;