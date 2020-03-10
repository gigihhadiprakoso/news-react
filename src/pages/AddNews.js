import React, {useState} from 'react';
import { Field } from 'bloomer';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { TextArea } from 'bloomer/lib/elements/Form/TextArea';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Container } from 'bloomer/lib/layout/Container';
import { Button } from 'bloomer/lib/elements/Button';
import InputFile from '../components/InputFile';
import {api} from '../helpers/AxiosMaster';
import {useHistory} from 'react-router-dom';

function AddNews(){
    let history = useHistory();
    const [stateForm, setStateForm] = useState({
        title:'',
        content:''
    });

    const [fileName, setFileName] = useState({});

    const requestForm = {
        'title':stateForm.title,
        'content':stateForm.content
    };

    const handleSubmit=()=>{
        const data = new FormData();
        data.append('photo',stateForm.photo)
        data.append('title',stateForm.title)
        data.append('content',stateForm.content)

        api.post('news',data,{
            headers:{
                'Authorization':'Bearer '+localStorage.getItem('x-token')
            }
        })
        .then(res=>{
            if(res.status==201){
                history.push("/");
            }
        })
    }

    const handleInputChange=(e)=>{
        const targetTag=e.target;
        let val=targetTag.value;

        if(targetTag.files !== null &&  targetTag.files !== undefined) {
            setFileName({name:targetTag.files[0].name});
            val=targetTag.files[0];
        } 
        setStateForm({
            ...stateForm,
            [e.target.name]:val
        });
    }

    return(
        <Container>
            <Field>
                <Label>Title</Label>
                <Input name="title" onChange={handleInputChange}></Input>
            </Field>
            <Field>
                <Label>Photo</Label>
                <InputFile name="photo" handleChange={handleInputChange} nameFile={fileName.name}/>
            </Field>
            <Field>
                <Label>Description</Label>
                <TextArea name="content" onChange={handleInputChange}></TextArea>
            </Field>
            <Button isColor="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Container>
    );
}

export default AddNews;