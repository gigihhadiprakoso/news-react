import React from 'react';
import {TabList, Tab, TabLink} from 'bloomer';
import {Link} from 'react-router-dom';

function CustomTabs(){
    return(
        <TabList>
            <Tab><Link to="/"><TabLink>News</TabLink></Link></Tab>
            {/* <Tab><Link to="/grid"><TabLink>Grid</TabLink></Link></Tab>
            <Tab><Link to="/element"><TabLink>Element</TabLink></Link></Tab> */}
        </TabList>
    );
}

export default CustomTabs;