import { json } from "@sveltejs/kit";
import { prisma } from "../../../../libs/server/prisma";

export async function POST({ url, request , cookies }) {
  const {  email , password } = await request.json();
  if( email.trim().length===0 || password.trim().length===0)
  {
    return new json({ message: "cannot leave feilds empty" }, { status: 400 });
  }
  
  let alreadyExistsEmail;
  try {

         alreadyExistsEmail = await prisma.user.findFirst({
            where : {
                email : email
            }
        });

        if(!alreadyExistsEmail)
        {
            return new json({ message: "No account registered with this email" }, { status: 401 });
        }

        if(alreadyExistsEmail.password!==password)
        {
          return new json({ message: "wrong password" }, { status: 401 });
        }


  } catch (error) {
    return new json({ message: error.message }, { status: 500 });
  }


  return new json({ message: "logged in successfully!" , user : alreadyExistsEmail }, { status: 201 });
}