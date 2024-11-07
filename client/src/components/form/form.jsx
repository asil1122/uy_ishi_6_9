import { Button, Stack, TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';


export const Form = ({dataSubmit}) => {
    const { register, handleSubmit, reset } = useForm();

    const submit = (data) => {
        dataSubmit(data);
        reset();
    }
    return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <Stack pt={'30px'} gap={'20px'}>
                <TextField type='text' placeholder='Title' {...register('title')}/>
                <TextField type='text' placeholder='Description' {...register('description')}/>
                <Button type='submit' variant='contained'>Send</Button>
            </Stack>
        </form>
    </div>
  )
}
