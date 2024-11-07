import { Container, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSingleUser } from './query/useSingleUser'

export const UserDetail = () => {
    const { id } = useParams()
    const { data, isLoading } = useSingleUser(id)
    return (
        <Container>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (<>
                <Typography variant='h2'>{data?.title}</Typography>
                <Typography variant='h4'>{data?.description}</Typography>
            </>
            )}
        </Container>
    )
}
