import { redirect } from "@sveltejs/kit";
import { dataStore, getStore } from "../Store/userStore";



export const load=(event)=>{
 
   if(!event.locals.sessionData)
   {
     throw redirect(302 , "/login");
   }
}