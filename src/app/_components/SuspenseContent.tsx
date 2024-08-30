import {Suspense} from "react";

export const SuspenseContent = (props: {slug?: string}) => {
   return (
      <div>
         <Suspense fallback={<p>Loading page {props?.slug}...</p>}>
            <TodoContent slug={props?.slug} />
         </Suspense>
      </div>
   );
};

export async function TodoContent(props: {slug?: string}) {
   const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos/1?abcd=${props.slug}`, // fake query string to ensure unique fetch per page route
      {
         cache: "no-store",
         // next: { revalidate: 5 },
      }
   );
   const json = await data.json();

   // console.log(json)

   //sleep 1.5 seconds
   await new Promise((resolve) => setTimeout(resolve, 1500));

   return <div>{JSON.stringify({...json, slug: props.slug, price: Date.now()})}</div>;
}
