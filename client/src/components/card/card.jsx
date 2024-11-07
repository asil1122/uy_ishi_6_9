import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDeleteUser } from '../../page/home/service/mutation/useDeleteUser'
import { useNavigate } from 'react-router-dom';
import { useEditUser } from '../../page/home/service/mutation/useEditUser';

export const Card = ({title, description, id}) => {
    const { mutate} = useDeleteUser();
    const { mutate: mutateEdit } = useEditUser()
    const navigate = useNavigate();

    const deleteUser = () => {
        mutate(id,{
            onSuccess: (res) => {
                console.log(res);
            }
        })    
    }

    const editUser = () => {
        const newTitle = prompt("Enter new title");
        const newDescription = prompt("Enter new description");

        if (newTitle && newDescription) {
          mutateEdit({
            id,
            data: { title: newTitle, description: newDescription },
          });
        }
      };

  return (
    <div>
        <Typography variant='h2'>{title}</Typography>
        <Typography >{description}</Typography>
        <Button onClick={deleteUser} color='error' variant='contained'>delete</Button>
        <Button onClick={() => navigate(`/user-detail/${id}`)} color='success' variant='contained'>Show</Button>
        <Button onClick={editUser} color='success' variant='contained'>Edit</Button>
    </div>
  )
}
