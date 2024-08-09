"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import branches from '@/constants/sucursales.json';
import Link from 'next/link';

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
            <nav className="fixed top-0 left-0 right-0 bg-transparent text-white flex items-center justify-between z-50 px-9 py-10 hover:bg-white" style={{ height: '60px' }}>
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/brand/logo-huawei.png"
                            alt="Logo"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </Link>
                </div>
    
                <div className="flex space-x-4">
                    <Link href="/about" className="text-gray-800 text-xl">About</Link>
                    <Link href="/services" className="text-gray-800 text-xl">Services</Link>
                    <Link href="/contact" className="text-gray-800 text-xl">Contact</Link>
                </div>
                <div className="flex items-center gap-3">
                    <button aria-label="Toggle Menu">
                        <SearchIcon />
                    </button>

                    <button aria-label="Toggle Menu">
                        <UserIcon />
                    </button>

                    <div className="flex justify-center items-center" onClick={toggleMenu}>
                        <button aria-label="Toggle Menu" className="text-black text-xl">
                            Global
                        </button>
                        <ArrowDownIcon />
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
