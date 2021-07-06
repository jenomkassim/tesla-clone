import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Container>
            <HeroText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </HeroText>

            <BottomSection>
                <ButtonGroup>
                    <LeftButton>
                        Custom Order
                    </LeftButton>

                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </ButtonGroup>

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
`

const HeroText = styled.div `
padding-top: 15vh;
`

const ButtonGroup = styled.div`
display: flex;
justify-content: center;
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
`

const RightButton = styled(LeftButton)`
`

const BottomSection = styled.div``

const DownArrow = styled.img`
height: 40px;
margin-top: 40px;
animation: animateDown infinite 1.5s;
`