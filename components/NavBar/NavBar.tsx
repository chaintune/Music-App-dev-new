'use client'
import arrow from '@assets/arrow.svg'
import Link from 'next/link'
import Image from 'next/image'
import search from '@assets/search.svg'
import search_white from '@assets/search-white.svg'
import {Nav, Left, Tab, Right, Wrap1, Wrap11, Wrap111, Wrap112, Wrap12, Wrap2, Wrap21, Wrap22} from "@styles/Navbar/style"
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    const getSrc = (path: string) => {
        return path === '/search' ? search_white : search
    }
    const getColor = (path: string, content: string) => {
        return path === content ? '#FFF' : '#ffffff56'
    }
    return (
        <Nav>
            <Left>
                <Link href='/'><Tab style={{color: getColor(pathname, '/')}}>Home</Tab></Link>
                <Link href='/explore'><Tab style={{color: getColor(pathname, '/explore')}}>Explore</Tab></Link>
                <Link href='/search'><Image src={getSrc(pathname)} alt='' style={{width: '2.797vw', height: '2.797vw'}}  /></Link>
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