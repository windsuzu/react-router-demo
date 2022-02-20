import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    padding: 0 10%;
    justify-content: space-between;
    align-items: center;
    background-color: #008080;
`;

const Logo = styled.div`
    font-size: 2rem;
    color: white;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        li {
            margin-left: 1.5rem;
            font-size: 1.25rem;

            @media (max-width: 768px) {
                font-size: 0.9rem;
            }
        }
        a {
            text-decoration: none;
            color: #88dfdf;
            &:hover,
            &:active,
            &.active {
                color: #e6fcfc;
            }
        }
    }
`;

const MainNavigation = () => {
    return (
        <Header>
            <Logo>Great Quotes</Logo>
            <Nav>
                <ul>
                    <li>
                        <NavLink
                            to="quotes"
                            className={(nav) => (nav.isActive ? "active" : "")}
                        >
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="new-quote"
                            className={(nav) => (nav.isActive ? "active" : "")}
                        >
                            Add a Quote
                        </NavLink>
                    </li>
                </ul>
            </Nav>
        </Header>
    );
};

export default MainNavigation;
