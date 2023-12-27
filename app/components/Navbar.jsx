"use client";
import react from "react";
import Link from "next/link";

const Navbar=()=>{
    return (
        <ul className="flex  space-x-8 text-3xl font-bold font-sans">
            <li className="hover:text-slate-500" ><Link href="/">Home</Link></li>
            <li className="hover:text-slate-500"><Link href="#about">About</Link></li>
            <li className="hover:text-slate-500"><Link href="#services">Services</Link></li>
            <li className="hover:text-slate-500"><Link href="#projects">Projects</Link></li>
            
            <li className="hover:text-slate-500"><Link href="#contact">Contact</Link></li>
        </ul>
    )
}

export default Navbar;