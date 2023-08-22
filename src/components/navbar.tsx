"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavOptions from '@/components/nav-options'; // Make sure to import your NavOptions component
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggler"
import logo from '@/images/logo.png';
import { MenuSquare } from 'lucide-react'



export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="p-3 top-0 bg-accent text-accent-foreground navbar border-b-2 border-emerald-500">
        <div className="flex float-left">
            <Link href="/">
                <Image src={logo} alt="Logo" height={100} width={84} />
            </Link>    
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="hamburger-icon"><MenuSquare /></span> {/* You can replace this with an actual icon */}
            </button>
        </div>
        <div className={`flex justify-center mt-4 lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <NavOptions className='absolute top-16'/>
        </div>
        <div className="flex float-right gap-2 mt-8">
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
            <ModeToggle/>
        </div>
    </nav>
  );
};

