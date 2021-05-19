import { useEffect } from 'react';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Video from './Video';

import { loadVideos } from "../store/videos";
import { SmallContainer } from '../themes/theme';
import VideosList from './VideosList';





const Videos = () => {
    const dispatch = useDispatch();

    // Recupera el store de videos de Redux.
    const videosState = useSelector(state => state.videosStore);

    // useEffect(
    //     () => {
    //         dispatch(loadVideos());
    //     },
    //     []
    // );

    const loadNextPage = async () => {
        await dispatch(loadVideos());
    }

    return (
        <SmallContainer>
            <VideosList videoState={videosState} loadNextPage={loadNextPage} >

            </VideosList>
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