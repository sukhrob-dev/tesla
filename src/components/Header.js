import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux"

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo of Tesla" />
            </div>
            <Menu>
                {cars && cars.map((car, index) => 
                    <span key={index}>{car}</span>
                )}
            </Menu>
            <RightMenu>
                <span>shop</span>
                <span>tesla account</span>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => 
                    <li key={index}><span>{car}</span></li>
                )}
                <li><span>Existing Inventory</span></li>
                <li><span>Used Inventory</span></li>
                <li><span>Trade-in</span></li>
                <li><span>Cybertruck</span></li>
                <li><span>Roadaster</span></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.ul`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        span {
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`