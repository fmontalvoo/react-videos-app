import { Routes, Route } from 'react-router-dom';


import { LayoutContainer } from "../themes/theme";

import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <LayoutContainer>
            <nav>
                <Routes>
                    <Route path="/videos" element={<nav></nav>} />
                    <Route path="/users/signin" element={<nav></nav>} />
                    <Route path="/users/signup" element={<nav></nav>} />
                    <Route path="*" element={<Header />} />
                </Routes>
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