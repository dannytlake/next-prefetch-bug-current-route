import React from "react";
import NextLink from "next/link";

import {links} from "./constants";

export const Layout = ({children}: {children: React.ReactNode}) => {
   return (
      <div className='flex flex-col justify-center p-6'>
         <div className='bg-yellow-400 pb-6'>
            <h1 className='text-2xl font-bold text-black'>
               <NextLink href='/'>Home Page Link</NextLink>
            </h1>

            <h5 className='text-lg font-semibold text-black  pt-2'>
               Broken prefetched Loading UI (/(example-route-group)/broken-route-group):
            </h5>
            <div className='flex gap-2'>
               <NextLink href={`/broken-route-group`} className='text-blue-400 hover:text-blue-500'>
                  /broken-route-group
               </NextLink>
            </div>
            <h5 className='text-lg font-semibold text-black  pt-2'>
               Broken prefetched Loading UI (/example/broken2):
            </h5>
            <div className='flex gap-2'>
               <NextLink href={`/example/broken2`} className='text-blue-400 hover:text-blue-500'>
                  /example/broken2
               </NextLink>
            </div>
            <h5 className='text-lg font-semibold text-black pt-2'>
               Successful prefetched Loading UI (/works):
            </h5>
            <div className='flex gap-2'>
               <NextLink href={`/works`} className='text-blue-400 hover:text-blue-500'>
                  /works
               </NextLink>
            </div>
            <h5 className='text-lg text-black font-semibold'>
               Successful prefetched Loading UI (/[slug]):
            </h5>
            <div className='flex gap-2'>
               {links.map((link) => {
                  return (
                     <NextLink
                        key={link}
                        href={`/${link}`}
                        className='text-blue-400 hover:text-blue-500'
                     >
                        Page {link}
                     </NextLink>
                  );
               })}
            </div>
            <h5 className='text-lg font-semibold text-black'>
               Broken prefetched Loading UI (/products/[slug]):
            </h5>
            <div className='flex gap-2'>
               {links.map((link) => {
                  return (
                     <NextLink
                        key={link}
                        href={`/products/${link}`}
                        className='text-blue-400 hover:text-blue-500'
                     >
                        Page {`/products/${link}`}
                     </NextLink>
                  );
               })}
            </div>
         </div>
         {children}
         <div className='bg-yellow-400 pt-6'>FOOTER</div>
      </div>
   );
};
