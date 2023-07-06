import { redirect } from "@sveltejs/kit";
import { dataStore, getStore } from "../Store/userStore";



export const load=()=>{
    const data = getStore(dataStore);
    console.log(data);
    if(data===null){
        throw redirect(302 , "/login");
      }
}