import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadVideos } from "../store/videos";



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

    return (
        <div>
            {
                videosState.data.videos
                    .map(
                        video => <div key={video.id}><h2>{video.title}</h2></div>
                    )
            }
        </div>
    );
}

export default Videos;