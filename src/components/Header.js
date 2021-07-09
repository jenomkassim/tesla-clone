import React from "react"
import styled from "styled-components"

function Header() {
    return(
        <Container>
            <Logo>
                <a>
                    <img src="./images/logo.svg" alt="logo" />
                </a>
            </Logo>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#">Menu</a>
            </RightMenu>
        </Container>
    );
}

export default Header

const Container = styled.div`
height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
width: 100%;
`

const Logo = styled.div`
`

const Menu = styled.div`
font-weight: 600;

a {
padding: 0 10px;
text-decoration: none;
}

@media(max-width: 1024px) {
display: none;
}

`

const RightMenu = styled.div`
font-weight: 600;

a {
padding: 0 10px;
text-decoration: none;
}

`