<template>
    <header>
        <div class="bg-[#1B6392] h-30">
            <div class="px-65 border-b border-[#FFFFFF]  h-12 text-white flex flex-row items-center justify-between text-sm">
                <p>Welcome to Clicon online eCommerce store.</p>
                <div class="flex flex-row">
                    <div class="flex flex-row items-center gap-3 px-7">
                        <p>Follow us:</p>
                        <div class="flex flex-row gap-3">
                            <div class="size-4 cursor-pointer"><img src="@/public/Twitter.svg" alt="twitter" class="size-full" /></div>
                            <div class="size-4 cursor-pointer"><img src="@/public/Facebook.svg" alt="facebook" class="size-full" /></div>
                            <div class="size-4 cursor-pointer"><img src="@/public/Pinterest.svg" alt="pinterest" class="size-full" /></div>
                            <div class="size-4 cursor-pointer"><img src="@/public/Reddit.svg" alt="reddit" class="size-full" /></div>
                            <div class="size-4 cursor-pointer"><img src="@/public/Youtube.svg" alt="youtube" class="size-full" /></div>
                            <div class="size-4 cursor-pointer"><img src="@/public/Instagram.svg" alt="instagram" class="size-full" /></div>
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-3 border-l border-[#FFFFFF] pl-6 h-6">
                        <div class="flex flex-row gap-2 items-center cursor-pointer">
                            <p>Eng</p>
                            <div class="size-3"><img src="@/public/CaretDown.svg" alt="caretdown" class="size-full"></div>
                        </div>
                        <div class="flex flex-row gap-2 items-center cursor-pointer">
                            <p>USD</p>
                            <div class="size-3"><img src="@/public/CaretDown.svg" alt="caretdown" class="size-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-65 h-18 flex flex-row items-center justify-between">
                <div class="size-40"><img src="@/public/Logo (1).svg" alt="logo" class="size-full"></div>
                <div class="flex flex-row items-center gap-44">
                    <form action="" class="flex relative">
                        <input type="text" placeholder="Search for anything..." class="h-10 bg-white w-185 flex items-center text-sm px-5 rounded-xs focus:outline-none">
                        <div class="size-4.5 absolute top-3 left-175 cursor-pointer"><img src="@/public/MagnifyingGlass.svg" alt="logo" class="size-full"></div>
                    </form>
                    <div class="flex gap-5 items-center h-10">
                        <div class="size-8 cursor-pointer"><img src="@/public/ShoppingCartSimple.svg" alt="cart" class="size-full" /></div>
                        <div class="size-8 cursor-pointer"><img src="@/public/Heart.svg" alt="heart" class="size-full" /></div>
                        <div class="size-8 cursor-pointer"><img src="@/public/User.svg" alt="user" class="size-full" /></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-65 flex justify-between items-center h-24 text-sm">
            <div class="flex cursor-pointer">
                <div class="bg-[#F2F4F5] flex items-center px-7 py-4 gap-3">
                    <p class="font-semibold">All Category</p>
                    <div class="size-4"><img src="@/public/CaretDown.png" alt="caretdown" class="size-full"></div>
                </div>
                <div class="flex items-center px-5 py-4 gap-3">
                    <div class="size-6"><img src="@/public/MapPinLine.svg" alt="map" class="size-full"></div>
                    <p class="text-[#5F6C72] font-medium">Track Order</p>
                </div>
                <div class="flex items-center px-5 py-4 gap-3">
                    <div class="size-6"><img src="@/public/ArrowsCounterClockwise.svg" alt="counter" class="size-full"></div>
                    <p class="text-[#5F6C72] font-medium">Compare</p>
                </div>
                <div class="flex items-center px-5 py-4 gap-3">
                    <div class="size-6"><img src="@/public/Headphones.svg" alt="headphone" class="size-full"></div>
                    <p class="text-[#5F6C72] font-medium">Customer Support</p>
                </div>
                <div class="flex items-center px-5 py-4 gap-3">
                    <div class="size-6"><img src="@/public/Info.svg" alt="info" class="size-full"></div>
                    <p class="text-[#5F6C72] font-medium">Need Help</p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div class="size-8"><img src="@/public/PhoneCall.svg" alt="call" class="size-full"></div>
                <p class="text-xl">+1-202-555-0104</p>
            </div>
        </div>
    </header>
</template>