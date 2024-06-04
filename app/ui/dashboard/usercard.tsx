import { GetUserResponse } from '@/app/lib/definition'
import next from 'next'
import Image from 'next/image'
import React from 'react'
import { poppins } from '../fonts'
async function getUser() {
    const res  = await fetch('https://reqres.in/api/users?page=2', { next: { revalidate: 3600 } })
    return res.json()
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
  }

const UserCard = async () => {
    const users : GetUserResponse= await getUser()
    return (
        <div className='grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {users.data?.map((user)=>(
                <div key={user.id} className='flex gap-2 items-center bg-slate-100 rounded-md shadow-md p-2 h-28 hover:scale-105 hover:duration-300'>
                    <Image src={user.avatar} alt='user' width={30} height={30} className='rounded-full'></Image>
                    <div className=''>
                        <div className={`${poppins.className} font-bold`}>{user.first_name}</div>
                        <div className=''>{user.email}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserCard
