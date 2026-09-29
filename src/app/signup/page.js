

import SignUpPage from '@/components/templates/SignUpPage'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOption } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

async function page(props) {
   const session=await getServerSession(authOption)
   if(session){
    redirect("/account")
   }
  return (
   <SignUpPage/>
  )
}

export default page