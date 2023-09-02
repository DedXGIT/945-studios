'use client';

import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand
        href="#"
      >
        <img
          alt="Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          945 STUDIOS
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link
          href="#"
        >
          <p>
            About
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


