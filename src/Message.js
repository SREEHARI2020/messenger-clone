import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

export const Message = ({username,text}) => {
    const isUser=username===text.username;
    return (
        <div className={`message ${isUser&&'message-user'}`}>
     <Card className={isUser?'message_userCard':'message_guestCard'}> 
         <CardContent>
             <Typography color='white' variant='h5' component='h2'>
             <h2>{text.username}:{text.message}</h2>
             </Typography>
         </CardContent>
         
          
          </Card>
          </div>
    )  
}
