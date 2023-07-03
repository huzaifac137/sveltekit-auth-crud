import { json } from '@sveltejs/kit';
import { getDataByValueAndDelete } from '../../../../../Components/dummy-data.js';

export async function DELETE({url})
{
   const value = url.pathname.split("/delete/")[1];
   
   const data= getDataByValueAndDelete(value);


   return new json({message :"Successfully deleted!"} , {status:201})
}