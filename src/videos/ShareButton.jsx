import { ClearButton, SvgButton } from "../themes/theme";

const ShareButton = ({ video }) => {

    return (
        <ClearButton >
            <SvgButton src="/share.svg" ></SvgButton>
        </ClearButton>
    );
}

export default ShareButton;