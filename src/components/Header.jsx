"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import axios from "axios";
import Logo from "../../public/logo.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [metallTypes, setMetallTypes] = useState([]);

  const getTypes = async () => {
    try {
      const res = await axios.get(
        "http://192.168.0.105:8001/api/metals/types/"
      );
      setMetallTypes(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50">
        <Container>
          <nav className="h-[72px] md:h-[84px] flex items-center justify-between relative">
            {/* Logo */}
            <Link href={"/"}>
              <Image
                className="w-[120px] md:w-[150px]"
                src={Logo}
                alt="Поставка, продажа и покупка металлов и сплавов - Логотип компании"
                priority
                quality={90}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10 text-white text-[16px] font-medium">
              <Link className="hover:text-white/80 transition" href={"/"}>
                Главная
              </Link>

              {/* Metals dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 hover:text-white/80 transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Металлы
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-0 w-44 bg-white rounded-lg shadow-lg py-2 z-50">
                    {metallTypes.length > 0 ? (
                      metallTypes.map((type) => (
                        <Link
                          key={type.id}
                          href={`/metalls/${type.id}`}
                          className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                        >
                          {type.name}
                        </Link>
                      ))
                    ) : (
                      <p className="px-4 py-2 text-gray-500">Нет металлов</p>
                    )}
                  </div>
                )}
              </div>

              <Link
                className="hover:text-white/80 transition"
                href={"/privacy-policy"}
              >
                Конфиденциальность
              </Link>
              <Link className="hover:text-white/80 transition" href={"/terms"}>
                Условия
              </Link>
              <Link
                className="hover:text-white/80 transition"
                href={"/contact"}
              >
                Контакты
              </Link>
            </div>

            {/* Get Started btn */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-white text-black rounded-lg px-5 py-2.5 font-semibold hover:bg-gray-200 transition"
              >
                Начать
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-white/25 text-white hover:bg-white/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile menu */}
          {/* Mobile menu */}
          <div
            className={`${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } lg:hidden overflow-hidden transition-all duration-300 ease-out`}
          >
            <div className="pb-6 pt-2 border-t border-white/10 text-white">
              <div className="flex flex-col gap-3 text-base font-medium">
                {/* Home */}
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/"}
                >
                  Главная
                </Link>

                {/* Metals Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between px-1 py-2 hover:text-white/80 transition"
                  >
                    <span>Металлы</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`w-5 h-5 transition-transform ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Metall turlari */}
                  <div
                    className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out ${
                      dropdownOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {metallTypes.length > 0 ? (
                      metallTypes.map((type) => (
                        <Link
                          key={type.id}
                          onClick={() => setIsOpen(false)}
                          href={`/metalls/${type.id}`}
                          className="block px-1 py-2 text-sm hover:text-white/70 transition"
                        >
                          {type.name}
                        </Link>
                      ))
                    ) : (
                      <p className="px-1 py-2 text-gray-400">Нет металлов</p>
                    )}
                  </div>
                </div>

                {/* Other Links */}
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/privacy-policy"}
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/terms"}
                >
                  Условия
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-2 hover:text-white/80 transition"
                  href={"/contact"}
                >
                  Контакты
                </Link>

                {/* Get Started Button */}
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center bg-white text-black rounded-lg px-4 py-2.5 font-semibold hover:bg-gray-200 transition"
                >
                  Начать
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
