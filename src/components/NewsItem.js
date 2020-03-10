import React from 'react';
import moment from 'moment';
import {Image, Column,Columns} from 'bloomer';
import { Box } from 'bloomer/lib/elements/Box';
import 'moment/locale/id';
import { Content } from 'bloomer/lib/elements/Content';
import { Link } from 'react-router-dom';

function NewsItem(props){
    return(
        <Box>
            <Columns>
                <Column>
                    <Image isSize="128x128" src={props.data.photo}/>
                </Column>
                <Column>
                    <Content>
                        <Link to={"/news/"+props.data.id}><h1>{props.data.title}</h1></Link>
                    </Content>
                </Column>
                <Column>
                    <span 
                        style={{
                                right:"1em",
                                bottom:"1em",
                                float:"right"
                        }}
                        >
                            <p>
                                <i>{moment(props.data.created_at).fromNow()}</i>
                            </p>
                    </span>
                </Column>
            </Columns>
        </Box>
    );
}

export default NewsItem;