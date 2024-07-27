import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-800 p-1 items-center">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                   Todo
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                       
                       
                        {isOpen ? <IoClose  className="w-8 h-8" /> : <MdMenu  className="w-8 h-8" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <Link to="/" className="block text-white py-2" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="block text-white py-2" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="block text-white py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
