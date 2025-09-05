import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Saira } from 'next/font/google';

const saira = Saira({
    subsets:["latin"],
    weight: ["600"]
})// font for Swach setu

const Header: React.FC = () => {
    return (
        <nav className="bg-white p-4 border-b border-gray-200 flex items-center justify-between relative shadow-sm">

            <div className="flex items-center gap-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={39}
                        className="object-contain"
                    />
                    <span
                        className={`relative text-green-600 text-2xl ${saira.className}`}>
                    
                        Swach Setu
                        <span 
                        ></span>
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                {[
                    { name: 'Home', path: '/' },
                    { name: 'General', path: '/general' },
                    { name: 'Task', path: '/task' },
                    { name: 'Community', path: '/community' },
                    { name: 'Green Heroes', path: '/green-heroes' },
                ].map(({name,path}) => (
                    <a
                        key={name}
                        href={path}
                        className="hidden lg:block font-medium h-[30px] overflow-hidden group relative ml-5"
                    >
                        <div>
                            <span className="flex items-center h-[30px] text-gray-500 group-hover:translate-y-[-30px] transition-transform duration-300">
                                {name}
                            </span>
                            <span className="flex items-center h-[30px] text-green-600 group-hover:translate-y-[-30px] transition-transform duration-300 absolute top-[30px] left-0 w-full">
                                {name}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {/* Right Section: Buttons */}
            <div className="flex items-center gap-4">
                {/* Sign in Button */}
                <Link
                    href="/signin"
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-medium rounded-md transition duration-300 hover:opacity-80 inline-block text-center"
                >
                    Sign in
                </Link>

                {/* Sign up Button */}
                <Link
                    href="/auth"
                    className="px-4 py-2 bg-green-600 text-white font-medium rounded-md transition duration-300 hover:brightness-110 hover:shadow-md inline-block text-center"
                >
                    Sign Up 
                </Link>

            </div>
        </nav>
    );
};

export default Header;
