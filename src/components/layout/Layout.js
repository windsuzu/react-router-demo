import React from "react";
import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const Main = styled.main`
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
`;

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <Main>{props.children}</Main>
        </>
    );
};

export default Layout;
