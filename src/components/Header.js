import React, {useState} from "react"
import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const allMenuItems = ["Model S", "Model Y", "Model 3", "Model X", "Solar Panels", "Solar Roof", "Accessories"]

    const [ToggleMenu, setToggleMenu] = useState(false)
    const [screenSize, setscreenSize] = useState(false)

    const togglingMenu = () => {
        setToggleMenu(prev => !prev)
    }

    const checkingScreenSize = () => {
        if (window.innerWidth <= 1024) {
            setscreenSize(true)
        } else {
            setscreenSize(false)
        }
    }


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
                <a href="#" onClick={togglingMenu}>Menu</a>
            </RightMenu>

            <Sidebar isClicked={ToggleMenu} onresize={checkingScreenSize}>
                <CloseBox>
                    <CustomClose onClick={togglingMenu}/>
                </CloseBox>
                {screenSize ? allMenuItems.map(item =>
                    <li>{item}</li>
                ) : ""}
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade-In</li>
                <li>Test Drive</li>
                <li>Cybertruck</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Commercial Energy</li>
                <li>Utilities</li>
                <li>Find Us</li>
                <li>Support</li>
            </Sidebar>
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
z-index: 1;
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

const Sidebar = styled.div`
position: fixed;
width: 300px;
top: 0;
right: 0;
bottom: 0;
background-color: #ffffff;
padding: 30px 30px;
z-index: 10;
transform: ${props => props.isClicked ? 'translateX(0)': 'translateX(100%)'};
// display: ${props => props.isClicked ? 'initial': 'none'};
transition: 0.8s ease-in-out;

li {
list-style: none;
padding: 10px;
font-weight: 600;
cursor: pointer;
font-size: 15px;
}

li:hover{
background: rgba(189, 195, 199, 0.3);
border-radius: 10px
}

`

const CloseBox = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 20px;
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`