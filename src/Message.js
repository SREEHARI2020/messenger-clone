import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'

export const Message =forwardRef( ({username,text},ref) => {
    const isUser=username===text.username;
    return (
        <div ref={ref} className={`message ${isUser&&'message-user'}`}>
     <Card className={isUser?'message_userCard':'message_guestCard'}> 
         <CardContent>
             <Typography color='white' variant='h5' component='h2'>
             <h2>{!isUser &&`${text.username||'Unknown User'}:` }{text.message}</h2>
             </Typography>
         </CardContent>
         
          
          </Card>
          </div>
    )  
}
)
