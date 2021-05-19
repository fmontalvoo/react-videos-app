import { useState, useEffect } from 'react';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Video from './Video';

import { loadVideos } from "../store/videos";
import { SmallContainer } from '../themes/theme';
import VideosList from './VideosList';





const Videos = () => {
    const dispatch = useDispatch();

    const [loading, setState] = useState(false);

    // Recupera el store de videos de Redux.
    const videosState = useSelector(state => state.videosStore);

    // useEffect(
    //     () => {
    //         dispatch(loadVideos());
    //     },
    //     []
    // );

    const loadNextPage = async () => {
        setState(true);
        await dispatch(loadVideos());
        setState(false);
    }

    return (
        <SmallContainer>
            <VideosList videosState={videosState} loadNextPage={loadNextPage} loading={loading} />
            {
                // Lista todos los videos del storage de Redux.
                // videosState.data.videos
                //     .map(
                //         (video, index) => (
                //             <Video video={video} index={index} />
                //         )
                //     )
            }
        </SmallContainer>
    );
}

export default Videos;