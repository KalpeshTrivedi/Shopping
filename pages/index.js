import Navbar from "../pages/navbar";
import Image from "next/image";
const Home =()=>{
  return(
    <>
    <Navbar/>
    {/* {We Can Create Head Component and import too where we can add all head component in it like meta title etc} */}
    <title>Home</title>
<div class="bg-white">
  <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
    <div>
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">WELCOME HOME </h2>
      <p class="mt-4 text-gray-500">WELCOME TO THE SHOPPING where you can get what you want and what you wished for with the
       lowest price guaranteed. With the top most rated brands and top quality products WE DELEVER THE BEST.</p>

      <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div class=" pt-4">
          <dt class="font-medium text-gray-900">HOME</dt>
          <dd class="mt-2 text-sm text-gray-500">FIND THE LARGEST SALED PRODUCTED HERE </dd>
        </div>

        <div class="pt-4">
          <dt class="font-medium text-gray-900">CART</dt>
          <dd class="mt-2 text-sm text-gray-500">HERE YOU CAN EASILY ADD PRODUCTS TO CART</dd>
        </div>

        <div class="pt-4">
          <dt class="font-medium text-gray-900">CONTACT</dt>
          <dd class="mt-2 text-sm text-gray-500">Have queries, we heared that , you can get in touch with us easily</dd>
        </div>

        <div class="pt-4">
          <dt class="font-medium text-gray-900">PRODUCTS</dt>
          <dd class="mt-2 text-sm text-gray-500">shop with last number of products with the top most quality</dd>
        </div>

        <div class="pt-4">
          <dt class="font-medium text-gray-900">SHARE FEEDBACKS</dt>
          <dd class="mt-2 text-sm text-gray-500">now WORRIES we have that for you .here you can add your feedback and share with others too</dd>
        </div>

        <div class="pt-4">
          <dt class="font-medium text-gray-900">THANKS FOR BEING WITH US.</dt>
          <dd class="mt-2 text-sm text-gray-500">We will never let you down and always happy to se you back here</dd>
        </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <Image src="/home-first-shirt.webp" width= "300" height="200" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="bg-gray-100 rounded-lg"></Image>
      <Image src="/ladies-second.jpg" width= "300" height="200" alt="Top down view of walnut card tray with embedded magnets and card groove." class="bg-gray-100 rounded-lg"></Image>
      <Image src="/kids-third.webp" width= "300" height="200" alt="Side of walnut card tray with card groove and recessed card area." class="bg-gray-100 rounded-lg"></Image>
      <Image src="/fourth-image.jpg" width= "300" height="200" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="bg-gray-100 rounded-lg"></Image>
    </div>
  </div>
</div>
    </>
  );
};
export default Home;