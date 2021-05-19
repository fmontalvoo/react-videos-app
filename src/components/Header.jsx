import styled from "styled-components";
import { Title } from "../themes/theme";

const Header = (props) => {
    return (
        <header className={props.className}>
            <img src="/logo.svg" alt="logo" height="42" />
            <Title>React Videos</Title>
        </header>
    );
}

export default styled(Header)`
    text-align: center;
    padding: 1em 0;

    img{
        vertical-align: middle;
    }
`;