import Navbar from "../pages/navbar";
import Image from "next/image";
const Product = () => {
    return (
        <>
            <Navbar />
            <title>Products</title>
            <div class="bg-white">
                <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900"><b><i>OUR PRODUCTS</i></b></h2>

                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div class="group relative">
                            <div>
                                <Image src="/sec-prod-img.jpg" width= "320" height="360" alt="Front of men&#039;s Basic Tee in black."
                                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Mens checks Shirt
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500 py-2">Blue strips</p>
                                    <button class="bg-green-200 text-black border border-gray-200 font-bold py-2 px-4 rounded" type="button">
                                    Add Cart
                                    </button>
                                </div>
                                <p class="text-sm font-medium text-gray-900">Rs:550/-</p>
                            </div>      
                        </div>

                       
                        <div class="group relative">
                            <div>
                                <img src="/trd-prod-img.jpg" width= "320" height="300" alt="Front of men&#039;s Basic Tee in black."
                                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Kids Dress
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500 py-2">Dark Green</p>
                                    <button class="bg-green-200 text-black border border-gray-200 font-bold py-2 px-4 rounded" type="button">
                                    Add Cart
                                    </button>
                                </div>
                                <p class="text-sm font-medium text-gray-900">Rs:500/-</p>
                            </div>
                        </div>





                        <div class="group relative">
                            <div>
                                <Image src="/four-prod-img.jpg" width= "320" height="360" alt="Front of men&#039;s Basic Tee in black."
                                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Women dress
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500 py-2">Polcadots white</p>
                                    <button class="bg-green-200 text-black border border-gray-200 font-bold py-2 px-4 rounded" type="button">
                                    Add Cart
                                    </button>
                                </div>
                                <p class="text-sm font-medium text-gray-900">Rs:750/-</p>
                            </div>
                        </div>





                        <div class="group relative">
                           <div>
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black."
                                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            Basic T-Shirt
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500 py-2">Black</p>
                                    <button class="bg-green-200 text-black border border-gray-200 font-bold py-2 px-4 rounded" type="button">
                                    Add Cart
                                    </button>
                                </div>
                                <p class="text-sm font-medium text-gray-900">Rs:400/-</p>
                            </div>
                        </div>








                    </div>
                </div>
            </div>

        </>
    )
}
export default Product;