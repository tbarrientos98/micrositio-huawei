"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import branches from '@/constants/sucursales.json';
import navLinks from '@/constants/navlinks.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserIcon, SearchIcon, ArrowDownIcon } from "@/utilities/icons/heroIcons"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === '/'; // Si se quiere agregar validaciones con el pathname se peuden crear mas variables con el /nombredelpath

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const renderBranches = (group) => {
        return Object.entries(group).map(([letter, countries]) => (
            <div key={letter} className="p-4">
                <h2 className="text-lg text-red-500 font-bold">{letter}</h2>
                <div className="flex justify-center my-4">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <ul>
                    {countries.map((country, index) => (
                        <li key={index} className="hover:text-red-500 cursor-pointer">
                            {country}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div>
            <nav
                className={`fixed top-0 left-0 right-0 px-9 py-10 z-50 transition-all duration-300 ${isHome ? 'bg-transparent' : 'bg-white'
                    } ${isHome ? 'absolute' : 'relative'} ${isHome ? 'shadow-none' : 'shadow-none'}`}
                style={{ height: '60px' }}
            >
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/brand/logo-huawei.png"
                            alt="Logo"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </Link>
                    <div className="flex space-x-4">
                        {navLinks.map((link) => (
                            <div key={link.path} className="relative inline-block">
                                <Link
                                    href={link.path}
                                    className={`text-xl ${pathname === link.path ? 'text-red-500' : 'text-gray-800'}`}
                                >
                                    {link.name}
                                </Link>
                                {pathname === link.path && (
                                    <div className="absolute bottom-0 left-0 w-full border-b-2 border-red-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <button aria-label="Toggle Menu">
                            <SearchIcon />
                        </button>
                        <button aria-label="Toggle Menu">
                            <UserIcon />
                        </button>
                        <div className="flex items-center" onClick={toggleMenu}>
                            <button aria-label="Toggle Menu" className={`text-xl ${isHome ? 'text-black' : 'text-black'}`}>
                                Global
                            </button>
                            <ArrowDownIcon />
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className={`w-1/2 md:w-1/2 lg:w-1/3 absolute top-16 right-0 bg-gray-100 text-gray-500 transition-transform duration-300 ease-in-out ${isOpen ? 'h-81' : 'h-0'} overflow-hidden z-40 rounded-xl mt-4`}
            >
                <div className="flex flex-wrap">
                    {renderBranches(branches)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
