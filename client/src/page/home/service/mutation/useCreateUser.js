import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'


export const useCreateUser = () => {
    const client = useQueryClient();
    return useMutation({
    mutationFn: (data) => {
        return request.post('/todos', data).then((res)=> res.data)
    },
    onSuccess: () => {
        client.invalidateQueries(['todos']);
    }
  })
}
