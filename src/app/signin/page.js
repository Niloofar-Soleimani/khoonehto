


import SignInPage from '@/components/templates/SignInPage'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOption } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function page(props) {
  const session=await getServerSession(authOption)
  if(session){
  redirect("/account");
  }

  return (
    <div>

        <SignInPage/>
    </div>
  )
}
