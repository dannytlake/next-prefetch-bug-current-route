import React from "react";
import NextLink from "next/link";

export const Layout = ({children}: {children: React.ReactNode}) => {
   return (
      <div className='flex flex-col justify-center p-6'>
         <h3>full-layout</h3>
         {children}
      </div>
   );
};

export default Layout;
