import { redirect } from '@sveltejs/kit';
import { dataStore, getStore } from '../../../Store/userStore.js';

export const load=()=>{
  const data = getStore(dataStore);

   
  if(data==null){
    throw redirect(302 , "/");
  }
}

export const actions = {

    default: async ({  request , fetch }) => {
        const data = await request.formData();
        const color= data.get('color');
        const value= data.get('value');

        if(getStore(dataStore)==null)
        {
              throw redirect(302 , "/");
        }

        const creatorId = getStore(dataStore).id;

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