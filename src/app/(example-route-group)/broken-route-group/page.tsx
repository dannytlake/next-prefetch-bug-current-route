export const dynamic = "force-dynamic";

export default async function ContentPage() {
   const result = await fetch(`https://api.vercel.app/products/1`);
   const data = await result.json();

   const myDate = new Date().toISOString();

   return (
      <div>
         <h1>Date Generated: {Date.now()}</h1>
         <h1>{myDate}</h1>
         <h2>Product Name: {data.name}</h2>
      </div>
   );
}
