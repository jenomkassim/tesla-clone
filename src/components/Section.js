import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section(props) {
    return (
        <Container backgroundImage = {props.bgImage}>
            <Fade bottom>
                <HeroText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </HeroText>
            </Fade>

            <BottomSection>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtn}
                        </LeftButton>

                        {props.rightBtn &&
                        <RightButton>
                            {props.rightBtn}
                        </RightButton>
                        }

                    </ButtonGroup>
                </Fade>

                <DownArrow src="./images/down-arrow.svg"/>
            </BottomSection>

        </Container>
    )
}

export default Section

const Container = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('./images/model-s.jpg');
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: ${props => `url("./images/${props.backgroundImage}")`};
`

const HeroText = styled.div `
padding-top: 15vh;
`

const ButtonGroup = styled.div`
display: flex;
justify-content: center;
@media(max-width: 768px) {
flex-direction: column;
align-items: center;
}
`

const LeftButton = styled.div`
margin: 10px;
height: 40px;
width: 256px;
border-radius: 100px;
background-color: rgba(23, 26, 32, 0.8);
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: #ffffff;
font-size: 12px;
cursor: pointer;
opacity: 0.85
`

const RightButton = styled(LeftButton)`
background-color: #ffffff;
opacity: 0.65;
color: #000000;
`

const BottomSection = styled.div``

const DownArrow = styled.img`
height: 40px;
margin-top: 40px;
animation: animateDown infinite 1.5s;
`