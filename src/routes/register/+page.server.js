import { redirect } from '@sveltejs/kit';
import { dataStore, getStore } from '../../Store/userStore.js';

export const load=(event)=>{

   
  if(event.locals.sessionData)
  {
   
       throw redirect(302 , "/");
  }
    
}
export const actions = {
    default : async({request , fetch})=>{
        const data = await request.formData();

        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        let responseData , responseMsg;
        try {
          responseMsg = "";
          const response = await fetch("/api/users/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
    
            body: JSON.stringify({
              username : username ,
              email :email,
              password : password
            }),
          });
    
          responseData = await response.json();
    
          if (response.status !== 201) {
            throw new Error(responseData.message);
          }
    
          responseMsg = responseData.message;
          return {
              responseMsg : responseMsg
          }
          
        } catch (error) {
          responseMsg = error.message;
           
          return {
            responseMsg : responseMsg
          }
        }


    }
}