export const dynamic = "force-dynamic";

export default async function ContentPage({params}: {params: {slug: string}}) {
   const result = await fetch(`https://api.vercel.app/products/${params.slug}`);
   const data = await result.json();

   const myDate = new Date().toISOString();

   return (
      <div>
         <h1>Date Generated: {Date.now()}</h1>
         <h1>{myDate}</h1>
         <h2>Product Name: {data.name}</h2>

         <div>
            <h2>Slug: {params.slug}</h2>
         </div>
      </div>
   );
}
