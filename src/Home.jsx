import styled from 'styled-components';

// Tagged templates.
let Example = styled.div`
    background-color: ${(props) => props.bg};
    height: 200px;
    padding: 50px;
`;

let Button = styled.button`
    border: solid 1px red;
    background-color: trasnparent;
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    border-radius: 2px;

`;

// Extension de estilos. Aqui podemos sobreescribir los estilos del boton.
let PrimaryButton = styled(Button)`
    border: 0;
    background-color: red;
`;

let Input = styled.input.attrs(
    (props) => {
        return {
            type: 'email'
        };
    }
)`
    border: solid 1px red;
`;

const Home = () => {
    return (
        <Example bg="green" >
            <h1>¡Hola Mundo!</h1>
            <Input type="text" placeholder="Escribe algo..." />
            <Button primary >Boton</Button>
            <PrimaryButton>Boton</PrimaryButton>
        </Example>
    );
}

export default Home;