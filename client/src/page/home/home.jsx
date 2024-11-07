import React from 'react'
import { useGetUsers } from './service/query/useGetUsers'
import { Card } from '../../components/card/card'
import { Container } from '@mui/material'
import { Form } from '../../components/form/form'
import { useCreateUser } from './service/mutation/useCreateUser'

export const Home = () => {
    const {data,isLoading,error} = useGetUsers();
    const { mutate } = useCreateUser();
    const submit = (data) => {
        mutate(data,{
            onSuccess: () => {
                console.log(res);
                
            }
        });
    }
    return (
    <Container>
        <Form dataSubmit={submit}/>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (
            data?.map((item) => <Card key={item.id} {...item}/>)
        )}
    </Container>
  )
}
