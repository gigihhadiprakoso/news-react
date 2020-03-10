import React, {useState, useEffect} from 'react';
import NewsItem from '../components/NewsItem';
import {Container, Button, Icon, Control, Columns} from 'bloomer';
import CustomHeader from '../components/CustomHeader';
import {api} from '../helpers/AxiosMaster';
import { Link, NavLink } from 'react-router-dom';
import { Column } from 'bloomer/lib/grid/Column';

function ListNews() {
    const [stateNews, setStateNews] = useState([]);

    useEffect( () => {
        const fetchNews=async()=> {
            const listNews = await api.get('news')
            setStateNews(listNews.data.data);
        };
        fetchNews();
    },[]);

    return(
        <div>
            <CustomHeader />
            <Container>
            <Columns>
                <Column>
                    <Button isColor="primary" style={{float:"right"}}>
                        <Link to="/add-news" style={{color:"white"}}>
                            <Icon isSize="small" className="fa fa-plus" />&nbsp;&nbsp;Add News
                        </Link>
                    </Button>
                </Column>
            </Columns>
            {
                stateNews.map( function(i){
                    return <NewsItem data={i} key={i.id}></NewsItem>
                })
            }
            </Container>
        </div>
    );
}

export default ListNews;