import { redirect } from '@sveltejs/kit';
import { dataStore, getStore } from '../../Store/userStore.js';
import jwt from "jsonwebtoken";


export const prerender = false;


export const load = async ({ locals, fetch, url , cookies }) => {

  const sessionId =locals.sessionData;

   if(!sessionId || sessionId=="undefined")
   {
      throw redirect(302 , "/login");
   }

  let extractedValues;
  if(sessionId!="undefined" && sessionId)
  {
     extractedValues = sessionId;
  } 
   
  
  let responseData;
  try {
    const error = url.searchParams.get("error");

    const response = await fetch(
      `/api/posts?error=${error !== "" && error != null ? error : ""}`,
    );
    responseData = await response.json();

    if (response.status !== 200) {
      throw new Error(responseData.message);
    }

    return {
      data: responseData,
      store : extractedValues.id
    };

  } catch (error) {
    return {
      message: error.message,
    };
  }



};

export const actions = {


  default : async({cookies , event})=>{

        cookies.set("session_id");
        throw redirect(302 ,"/login");
    

      
     
             
        
  }

}