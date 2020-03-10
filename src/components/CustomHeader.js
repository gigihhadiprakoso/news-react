import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { Navbar, 
    NavbarLink, 
    NavbarDropdown, 
    NavbarDivider, 
    Icon, 
    NavbarBrand, 
    NavbarBurger, 
    Field, 
    Control, 
    Hero , 
    HeroHeader, 
    Nav, 
    NavItem, 
    NavCenter, 
    NavLeft,
    NavRight, 
    HeroBody, 
    Container, HeroFooter, Tab, TabLink, TabList, Tabs} from 'bloomer';
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu';
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem';
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import { Button } from 'bloomer/lib/elements/Button';
import {Title} from 'bloomer/lib/elements/Title';
import CustomTabs from './CustomTabs';

function CustomHeader(){
    let history = useHistory();

    const logoutProcess=()=>{
        localStorage.removeItem('x-token');
        history.push("/");
    }

    return(
    <Hero isColor="primary" isSize="medium" style={{marginBottom:"2em"}}>
        <HeroHeader>
            <Navbar style={{ borderBottom: 'solid 1px #fff', margin: '0' }}>
                <NavbarBrand>
                    <NavbarItem>
                        <img src="https://i.ya-webdesign.com/images/news-studio-png-1.png" style={{ marginRight: 0 },{width:"100%"}} />
                    </NavbarItem>
                </NavbarBrand>
                <NavbarMenu >
                    <NavbarEnd>
                        <NavbarItem>
                            <Field isGrouped>
                                <Control>
                                    { 
                                        localStorage.getItem('x-token')?
                                        <Button onClick={logoutProcess}><span>Logout</span></Button>:
                                        <NavLink to="/login">
                                            <Button><span>Login</span></Button>
                                        </NavLink>
                                    }
                                </Control>
                            </Field>
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        </HeroHeader>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title>News Anchor!!</Title>
            </Container>
        </HeroBody>
        <HeroFooter>
            <Tabs isBoxed isFullWidth>
                <Container>
                    <CustomTabs></CustomTabs>
                </Container>
            </Tabs>
        </HeroFooter>
    </Hero>
    );
}

export default CustomHeader;