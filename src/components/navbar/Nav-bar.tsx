'use client';

import {
    NavigationMenu,
    NavigationMenuContent,

    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,

} from "../ui/navigation-menu";
const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* mobile view */}

            {/* desktop view */}
            <div className="hidden lg:block">
                <div className="flex justify-center items-center py-10">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className="text-lg">
                                Home
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent">Why Prospectiv?</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex flex-col w-[20rem] px-5 py-3 space-y-5">
                                        <NavigationMenuLink>
                                            <div className="flex justify-between items-start gap-3">
                                                <h1 >Logo</h1>
                                                <span>
                                                    <h4 className="font-bold">Prospecting services</h4>
                                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </span>
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink>
                                            <div className="flex justify-between items-start gap-3">
                                                <h1 >Logo</h1>
                                                <span>
                                                    <h4 className="font-bold">Prospecting services</h4>
                                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </span>
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink>
                                            <div className="flex justify-between items-start gap-3">
                                                <h1 >Logo</h1>
                                                <span>
                                                    <h4 className="font-bold">Prospecting services</h4>
                                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </span>
                                            </div>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent">Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent">Pricing</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent">Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent">Company</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
            </div>
        </div>
    );
};

export default Navbar;


// <NavigationMenu className="max-w-7xl mx-auto bg-yellow-400 py-5 flex justify-between items-center">
//     <NavigationMenuList>
//         <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-transparent">Why Prospectiv?</NavigationMenuTrigger>
//             <NavigationMenuContent>
//                 <div className="flex flex-col">
//                     <NavigationMenuLink>
//                         <div className="flex justify-between items-center">
//                             <h1>Logo</h1>
//                             <span>
//                                 <h4>Prospecting services</h4>
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                             </span>
//                         </div>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                         <div className="flex justify-between items-center">
//                             <h1>Logo</h1>
//                             <span>
//                                 <h4>Prospecting services</h4>
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                             </span>
//                         </div>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink>
//                         <div className="flex justify-between items-center">
//                             <h1>Logo</h1>
//                             <span>
//                                 <h4>Prospecting services</h4>
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                             </span>
//                         </div>
//                     </NavigationMenuLink>
//                 </div>
//             </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
//             <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-transparent">Pricing</NavigationMenuTrigger>
//             <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
//             <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-transparent">Company</NavigationMenuTrigger>
//             <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-transparent">Item One</NavigationMenuTrigger>
//             <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//         </NavigationMenuItem>
//     </NavigationMenuList>
// </NavigationMenu>