import React, { useEffect, useState } from 'react';
import { Container } from 'bloomer/lib/layout/Container';
import { Content } from 'bloomer/lib/elements/Content';
import {api} from '../helpers/AxiosMaster';
import { Image } from 'bloomer';
import { useParams } from 'react-router';

function DetailNews(props){
    let {id} = useParams();
    const [stateNews, setStateNews] = useState({});

    useEffect(async()=>{
        const {data} = await api.get('news/'+id)

        setStateNews(data.data);
    },[]);

    return(
        <Container>
            <Content>
                <Image isSize="240x240" src={stateNews.photo} />
                <h1>{stateNews.title}</h1>
                <p>{stateNews.content}</p>
            </Content>
        </Container>
    );
}

export default DetailNews;