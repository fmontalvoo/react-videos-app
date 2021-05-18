import styled, { css } from 'styled-components';

let linkStyle = css`
    font-size: 0.5em;
`;

// Tagged templates.
let Example = styled.div`
    background-color: ${({theme}) => theme.colors.dark};
    height: 200px;
    padding: 50px;

    & a {
        color: purple;
    }

    &:hover {
        background-color: cyan;
    }

    &.important {
        background-color: yellow;
    }

    `;

let Button = styled.button`
    border: solid 1px red;
    background-color: trasnparent;
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    ${linkStyle} // Reutilizacion de estilos.

`;

// Extension de estilos. Aqui podemos sobreescribir los estilos del boton.
let PrimaryButton = styled(Button)`
    border: 0;
    background-color: red;
    ${linkStyle}
`;

let Input = styled.input.attrs(
    (props) => {
        return {
            type: 'email'
        };
    }
)`
    border: solid 1px red;
    .important &{
        background-color: purple;
    }
`;

const Home = () => {
    return (
        <Example bg="green"  >
            <h1>¡Hola Mundo!</h1>
            <Input type="text" placeholder="Escribe algo..." />
            <br />
            <Button primary >Boton</Button>
            <br />
            <PrimaryButton >Boton</PrimaryButton>
            <br />
            <a >Hola</a>
        </Example>
    );
}

export default Home;