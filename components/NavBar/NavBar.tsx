import arrow from '@assets/arrow.svg'
import Image from 'next/image'
import search from '@assets/search.svg'
import {Nav, Left, Tab, Right, Wrap1, Wrap11, Wrap111, Wrap112, Wrap12, Wrap2, Wrap21, Wrap22} from "@styles/Navbar/style"

const Navbar = () => {
    return (
        <Nav>
            <Left>
                <Tab>Home</Tab>
                <Tab>Explore</Tab>
                <Image src={search} alt='' style={{width: '2.797vw', height: '2.797vw'}}  />
            </Left>
            <Right>
                <Wrap1>
                    <Wrap11>
                        <Wrap111></Wrap111>
                        <Wrap112>24.40</Wrap112>
                    </Wrap11>
                    <Wrap12>
                        <Image src={arrow} alt="" style={{width: '0.9vw', height: '0.9vw'}}/>
                    </Wrap12>
                </Wrap1>
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

export default Navbar;
