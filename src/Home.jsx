import styled from 'styled-components';

// Tagged templates.
let Example = styled.div`
    background-color: ${(props) => props.bg};
    height: 200px;
`;

let Button = styled.button`
    background-color: ${({ primary }) => primary ? 'red' : 'inherit'}
`;

const Home = () => {
    return (
        <Example bg="green" >
            <h1>¡Hola Mundo!</h1>
            <Button primary >Boton</Button>
        </Example>
    );
}

export default Home;