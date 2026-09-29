

import { getServerSession } from 'next-auth'
 import {authOption} from "../api/auth/[...nextauth]/route"
import React from 'react'
import { redirect } from 'next/navigation';
import AccountPage from '@/components/templates/AccountPage';

export default async function AccountLayout({children}) {
     const session = await getServerSession(authOption);
     console.log("session",session);
     if(!session) redirect('/signin')
     
  return (
         <div>
            <AccountPage>{children}</AccountPage>
         </div>
  )
}
