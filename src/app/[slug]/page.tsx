// import { Flex } from '@chakra-ui/react'
// import { staticServices } from '@/data/static-engine-mapper'
// import Link from 'next/link'

import {SuspenseContent} from "../_components/SuspenseContent";

import {linksStatic} from "../_components/constants";

// export const dynamic = "force-static";

// If this page route is not statically rendered, throw an error
// this prevents use of any dynamic function on the route
// export const dynamic = 'force-static'

//If this page route is statically rendered, force-static will force it to be statically rendered
// this will cause any dynamic function like headers() and cookes() to return null
//export const dynamic ='force-static'

export async function generateStaticParams() {
   // return [{ slug: 'example' }, { slug: 'a' }, { slug: 'b' }, { slug: 'c' }]
   return linksStatic.map((slug) => ({slug: slug}));
}

//function for sleeping ms
function sleep(seconds: number) {
   return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export default async function ContentPage({params}: {params: {slug: string}}) {
   // const data = await getPageContent({
   //   slug: resolvePageUrl(params.slug),
   //   locale: 'en-US',
   // })

   //  await sleep(2);

   const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos/5?fakequery=${params.slug}`,
      {next: {revalidate: 500}}
      //if cache is no-store, the loading spinner will show for every page route, even though we've statically generated them
      //   {
      //   cache: 'no-store',
      // }
   );
   const json = await data.json();

   const myDate = new Date().toISOString();

   console.log("\n\n\n myDate = ", params.slug, myDate);

   return (
      <div>
         <h1>myDate = {myDate}</h1>
         {JSON.stringify(json)}
         {/* {ContentItems(data?.content)} */}
         <div>
            <h2>Slug: {params.slug}</h2>
         </div>

         <SuspenseContent slug={params.slug} />
      </div>
   );
}
