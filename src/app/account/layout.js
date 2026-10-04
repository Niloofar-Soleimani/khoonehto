

import { getServerSession } from 'next-auth'
 import {authOption} from "../api/auth/[...nextauth]/route"
import React from 'react'
import { redirect } from 'next/navigation';
import AccountPage from '@/components/templates/AccountPage';
import User from '@/models/User';

export default async function AccountLayout({children}) {
     const session = await getServerSession(authOption);
     console.log("session",session);
     if(!session) redirect('/signin')
     const {role} =await User.findOne({email : session.user.email})
  return (
         <div>
            <AccountPage role={role}>{children}</AccountPage>
         </div>
  )
}
