import { json } from "@sveltejs/kit";
import { prisma } from "../../../../libs/server/prisma";

export async function POST({ url, request }) {
  const { username , email , password } = await request.json();
  if(username.trim().length===0 || email.trim().length===0 || password.trim().length===0)
  {
    return new json({ message: "cannot leave feilds empty" }, { status: 400 });
  }
  
  try {
        const alreadyExistsName = await prisma.user.findFirst({
            where : {
                username : username
            }
        });

        if(alreadyExistsName)
        {
            return new json({ message: "username already exists" }, { status: 409 });
        }

        const alreadyExistsEmail = await prisma.user.findFirst({
            where : {
                email : email
            }
        });

        if(alreadyExistsEmail)
        {
            return new json({ message: "email is already registered " }, { status: 409 });
        }

    const newUser = await prisma.user.create({
      data : {
        username : username ,
         email : email ,
          password : password
      } ,
      include : {
        posts : true
      }
    });
  } catch (error) {
    return new json({ message: error.message }, { status: 500 });
  }
   

  return new json({ message: "successfully created a user" }, { status: 201 });
}