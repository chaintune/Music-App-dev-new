import arrow from '@assets/arrow.svg'
import Image from 'next/image'
import {Nav, Left, Tab, Right, Wrap1, Wrap11, Wrap111, Wrap112, Wrap12, Wrap2, Wrap21, Wrap22} from "@styles/Navbar/style"

const NavBar = () => {
    return (
        <Nav>
            <Left>
                <Tab>Home</Tab>
                <Tab>Explore</Tab>
                <Tab>Search</Tab>
            </Left>
            <Right>
                <Wrap1>
                    <Wrap11>
                        <Wrap111></Wrap111>
                        <Wrap112>2,485</Wrap112>
                    </Wrap11>
                    <Wrap12>
                        <Image src={arrow} alt="" style={{width: '0.9vw', height: '0.9vw'}}/>
                    </Wrap12>
                </Wrap1>
                <Wrap2>
                    <Wrap21>0xdg83tv...</Wrap21>
                    <Wrap22></Wrap22>
                </Wrap2>
            </Right>
        </Nav>
    );
}

export default NavBar;