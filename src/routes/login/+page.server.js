import { redirect } from '@sveltejs/kit';
import { dataStore, getStore } from '../../Store/userStore.js';
import jwt from "jsonwebtoken";
import {JWT_KEY} from "$env/static/private";
import { goto } from '$app/navigation';

export const load=async({cookies})=>{
                  
  const data = getStore(dataStore);

   
  if(data?.username && data?.email && data?.id){
    throw redirect(302 , "/");
  }

 
  
};

export const actions = {
    default : async({request , fetch  , cookies})=>{
        const data = await request.formData();

    
        const email = data.get("email");
        const password = data.get("password");

        let responseData , responseMsg;
        try {
          responseMsg = "";
          const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
    
            body: JSON.stringify({
              email :email,
              password : password
            }),
          });
    
          responseData = await response.json();
    
          if (response.status !== 201) {
            throw new Error(responseData.message);
          }
    
          responseMsg = responseData.message;
          const user = responseData.user;
       if(response.status===201 && user)
       {

        const sessionData = jwt.sign({id : user.id , email : user.email , username : user.username} ,JWT_KEY  ) ;
         
        cookies.set('session_id', sessionData, {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          secure: true,
          maxAge: 60 * 60 * 24 * 7 // one week
      });
       }
          

       

          return {
              responseMsg : responseMsg ,
            
              
          }
          
          
        } catch (error) {
          responseMsg = error.message;
           
          return {
            responseMsg : responseMsg
          }
        }
        
       


    }
}