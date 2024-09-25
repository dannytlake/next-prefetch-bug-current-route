import React from "react";
import NextLink from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
   return (
      <div className='flex flex-col justify-center p-6'>
         <h3>(example-route-group) Layout</h3>
         {children}
      </div>
   );
}
