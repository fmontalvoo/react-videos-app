import styled from 'styled-components';

// Tagged templates.
let Example = styled.div`
    background-color: red;
    height: 200px;
`;

const Home = () => {
    return (
        <Example></Example>
    );
}

export default Home;