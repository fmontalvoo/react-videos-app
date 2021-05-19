import { LayoutContainer } from "../themes/theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <LayoutContainer>
            <nav>
                <Header />
            </nav>
            <main>
                {/* Accede a los componentes que vienen en los props. */}
                {props.children}
            </main>
            <Footer />
        </LayoutContainer>
    );
}

export default Layout;