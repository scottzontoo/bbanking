'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

const AuthForm = ({type}: {type: string}) => {

    const [user, setUser] = useState(null)
  return (
    <section>
        <header>
        <Link href='/' className='cursor-pointer flex items-center gap-1'>
            <Image 
              src="/icons/logo.svg"
              width={24}
              height={24}
              alt='logo'
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
          </Link>

          <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                {user
                 ? 'Link Account'
                 : type === 'sigh-in'
                    ? "Sign In"
                    : "Sign Up"
                }
                <p className='text-16 font-normal text-gray-600'>
                    {user
                        ? "Link your account to get started"
                        : 'Please enter your details'
                    }
                </p>
            </h1>
          </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>
                {/* PlaidLink*/}
            </div>
        ):(
            <>
                FORMS
            </>
        )}
    </section>
  )
}

export default AuthForm
