import React from "react";
import NextLink from "next/link";

export const Layout = ({children}: {children: React.ReactNode}) => {
   return (
      <div className='flex flex-col justify-center p-6'>
         <div className='bg-yellow-400 pb-6'>
            <h1 className='text-2xl font-bold text-blue-400'>
               <NextLink href='/' prefetch={true}>
                  Home Page Link
               </NextLink>
            </h1>
         </div>

         <div className='bg-yellow-400 pb-6'>
            <h3 className='text-2xl font-bold text-blue-400'>
               <NextLink href='/page1' prefetch={true}>
                  Page 1
               </NextLink>
            </h3>
         </div>

         <div className='bg-yellow-400 pb-6'>
            <h3 className='text-2xl font-bold text-blue-400'>
               <NextLink href='/page2' prefetch={true}>
                  Page 2
               </NextLink>
            </h3>
         </div>
         {children}
         <div className='bg-yellow-400 pt-6'>FOOTER</div>
      </div>
   );
};
