import Link from 'next/link'
import React from 'react'

const tab = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" }

]

export default function Navbar() {
  return (
    <nav className="">
        <div className="text-black flex justify-center items-center gap-6">
            {tab.map((item, index) => (
            <Link key={index} href={item.href} >
                {item.name}
            </Link>
        ))}
        </div>
        
    </nav>
  )
}
