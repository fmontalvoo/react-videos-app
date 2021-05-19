import { useDispatch } from 'react-redux';
import { AppButton, ClearButton } from '../themes/theme';

import { signOut } from '../store/user';

let LogOutButton = (props) => {
    let dispatch = useDispatch();

    let logOutUser = () => {
        dispatch(
            signOut()
        );
    }

    return (
        <AppButton className={props.className} onClick={logOutUser}>
            Cerrar sesión
        </AppButton>
    )
}

export default LogOutButton;