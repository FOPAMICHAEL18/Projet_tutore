<template>
    <footer class="flex flex-col  bg-[#191C1F] ">
        <div class="px-65 flex py-20 gap-35">
            <div class="flex flex-col gap-7 pt-1">
                <div class="w-50 "><img src="@/public/Logo.svg" alt="logo" class="size-full"></div>
                <div class="flex flex-col gap-3">
                    <div>
                        <p class="text-[#77878F] text-xs">Customer Supports:</p>
                        <p class="text-[#FFFFFF] text-lg">(629) 555-0129</p>
                    </div>
                    <div class="text-[#ADB7BC]">
                        <p>4517 Washington Ave.</p>
                        <p>Manchester, Kentucky 39495</p>
                    </div>
                    <div class="text-[#FFFFFF]">
                        Ocaz@Kmer.com
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-20">
                <div class="flex flex-col">
                    <h1 class="text-base text-white font-semibold">TOP CATEGORY</h1>
                    <div class="flex flex-col gap-2 mt-5 text-[#929FA5] text-sm relative">
                        <FooterLink v-for="option in options" :key="option" :message="option" />    
                    </div>
                    <div class="flex items-center gap-2 mt-3.5 cursor-pointer">
                        <p class="text-[#EBC80C] text-sm">Browse All Product</p>
                        <div class="w-5 "><img src="@/public/ArrowRight.svg" alt="right" class="size-full"></div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-base text-white font-semibold">QUICK LINKS</h1>
                    <div class="flex flex-col gap-3.5 mt-5 text-[#929FA5] text-sm relative">
                        <FooterLink v-for="link in links" :key="link" :message="link" />    
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-12">
                <div>
                    <h1 class="text-base text-white font-semibold">DOWNLOAD APP</h1>
                    <div class="mt-5 flex flex-col gap-3">
                        <div class="bg-[#303639] flex items-center gap-5 px-6 py-4 rounded-sm cursor-pointer">
                            <div class="w-8 "><img src="@/public/Icon=google-play 1.svg" alt="google" class="size-full"></div>
                            <div class="flex flex-col text-white">
                                <p class="text-xs">Get it now</p>
                                <p class="font-semibold">Google Play</p>
                            </div>
                        </div>
                        <div class="bg-[#303639] flex items-center gap-5 px-6 py-4 rounded-sm cursor-pointer">
                            <div class="w-8 "><img src="@/public/Apple---Negative 1.svg" alt="app" class="size-full"></div>
                            <div class="flex flex-col text-white">
                                <p class="text-xs">Get it now</p>
                                <p class="font-semibold">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-base text-white font-semibold">POPULAR TAG</h1>
                    <div class="mt-5 flex flex-wrap gap-2 w-84">
                        <TagLink v-for="tag in tags" :key="tag" :message="tag" />
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t border-[#77878F] flex items-center justify-center text-[#ADB7BC] text-sm py-5">
            <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
        </div>
    </footer>
</template>

<script setup>
const options = [ "Computer and Laptop", "Smartphone", "Headphone", "Accessories", "Smartphone", "Camera and Photo", "TV and Homes" ];
const links = [ "Shop Product", "Shoping Cart", "Wishlist", "Compare", "Track Order", "Customer Help", 'About Us' ]
const tags = [ "Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD", 'Graphics Card', "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung" ]
</script>