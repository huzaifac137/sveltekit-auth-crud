import { redirect } from '@sveltejs/kit';
import { dataStore, getStore } from '../../Store/userStore.js';
import jwt from "jsonwebtoken";
//import {JWT_KEY} from "$env/dynamic/private";



export const load = async ({ fetch, url , cookies }) => {

  const sessionId = cookies.get("session_id");
   if(!sessionId || sessionId=="undefined")
   {
      throw redirect(302 , "/login");
   }

  let extractedValues;
  if(sessionId!="undefined" && sessionId)
  {
     extractedValues = jwt.verify(sessionId , process.env.JWT_KEY);
  } 
   
  if(data===null){
    throw redirect(302 , "/login");
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
    store : extractedValues
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
       
       dataStore.set(null);
       
      
        throw redirect(302 ,"/login");
    

      
     
             
        
  }

}