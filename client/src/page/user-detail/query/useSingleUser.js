import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../config/request'

export const useSingleUser = (id) => {
  return useQuery({
    queryKey: ['single-user', id],
    queryFn: () => request.get(`/todos/${id}`).then((res) => res.data)
  })
}
