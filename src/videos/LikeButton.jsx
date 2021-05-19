import { useDispatch } from "react-redux";

import { ClearButton, SvgButton } from "../themes/theme";

import { likeVideo } from '../store/like';

const LikeButton = ({ video }) => {

    const dispatch = useDispatch();

    const like = (id) => {
        dispatch(
            likeVideo(id)
        );
    }

    return (
        <ClearButton onClick={() => like(video.id)}>
            <SvgButton src="/heart.svg" active={video.isLikedByCurrentUser}></SvgButton>
        </ClearButton>
    );
}

export default LikeButton;