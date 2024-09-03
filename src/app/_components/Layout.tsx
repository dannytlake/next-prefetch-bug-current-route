import React from "react";
import NextLink from "next/link";

const prefetch = false;
import {linksSSR, linksStatic} from "./constants";

export const Layout = ({children}: {children: React.ReactNode}) => {
   return (
      <div className='flex flex-col justify-center p-6'>
         <div className='bg-yellow-400 pb-6'>
            <h1 className='text-2xl font-bold'>
               <NextLink href='/'>Home Page Link</NextLink>
            </h1>
            <h5 className='text-lg font-semibold'>Settings:</h5>
            <p>Prefetch: {prefetch.toString()}</p>
            <h5 className='text-lg font-semibold'>Statically Generated Pages (/[slug]):</h5>
            <div className='flex gap-2'>
               {linksStatic.map((link) => {
                  return (
                     <NextLink
                        prefetch={prefetch}
                        key={link}
                        href={`/${link}`}
                        className='text-blue-400 hover:text-blue-500'
                     >
                        Page {link}
                     </NextLink>
                  );
               })}
            </div>
            <h5 className='text-lg font-semibold'>Dynamic SSR Pages (/[slug]):</h5>
            <div className='flex gap-2'>
               {linksSSR.map((link) => {
                  return (
                     <NextLink
                        prefetch={prefetch}
                        key={link}
                        href={`/${link}`}
                        className='text-blue-400 hover:text-blue-500'
                     >
                        Page {link}
                     </NextLink>
                  );
               })}
            </div>
            <h5 className='text-lg font-semibold'>Dynamic SSR Pages (/testing/[slug]):</h5>
            <div className='flex gap-2'>
               {linksSSR.map((link) => {
                  return (
                     <NextLink
                        prefetch={prefetch}
                        key={link}
                        href={`/testing/${link}`}
                        className='text-blue-400 hover:text-blue-500'
                     >
                        Page {link}
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
