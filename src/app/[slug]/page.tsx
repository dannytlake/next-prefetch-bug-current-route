export const dynamic = "force-dynamic";

export default async function ContentPage(params: any) {
   const myDate = new Date().toISOString();

   return (
      <div>
         <h1>Date Generated: {Date.now()}</h1>
         <h1>{myDate}</h1>
      </div>
   );
}
