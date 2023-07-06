import { redirect } from '@sveltejs/kit';
import { dataStore, getStore } from '../../../Store/userStore.js';

export const prerender = false;

export const load=({locals})=>{

  const session = locals.sessionData;
  if(!session)
  {
    throw redirect(302 , "/login");
  }
 
}

export const actions = {

    default: async ({  request , fetch , locals }) => {
        const data = await request.formData();
        const color= data.get('color');
        const value= data.get('value');

        const session = locals.sessionData;
        if(!session)
        {
          throw redirect(302 , "/login");
        }

        const creatorId = session.id;
  

        let responseData , responseMsg;
    try {
      responseMsg = "";
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          colorName: color,
          colorValue: value,
          creatorId : creatorId
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
       
    },
   
};