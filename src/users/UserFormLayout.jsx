import styled from 'styled-components';

import { CenteredContainer, SmallContainer as SmallContainerTemplate, Title } from '../themes/theme';

// Extiende el css de SmallContainerTemplate.
let SmallContainer = styled(SmallContainerTemplate)`
    text-align: center;
`;

const Header = styled.header`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.dims.margin.normal}
`;


const UserFormLayout = (props) => {
    return (
        <CenteredContainer>
            <SmallContainer>
                <Header>
                    <img src="/logo.svg" alt="logo" height="120" />
                    <div>
                        <Title>React Videos</Title>
                    </div>
                </Header>
                {props.children}
            </SmallContainer>
        </CenteredContainer>
    );
}

export default UserFormLayout;