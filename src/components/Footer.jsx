"use client";

import React from "react";
import Link from "next/link";
import Container from "./Container";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { useContactInfo } from "@/hooks/useContactInfo";

const Footer = () => {
  const { contactData, loading, error } = useContactInfo();

  return (
    <footer className="bg-black text-white mt-28">
      <Container>
        <div className="py-16 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <Link href={"/"}>
                <Image
                  className="w-[150px] md:w-[200px]"
                  src={Logo}
                  alt="logo"
                />
              </Link>
              <p className="text-white/70 text-base leading-relaxed max-w-xs mt-5">
                Создаем отличный опыт с акцентом на простоту, производительность
                и надежность.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Правовая информация
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <Link className="hover:underline" href="/privacy-policy">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/terms">
                    Условия обслуживания
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/contact">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              {loading ? (
                <div className="space-y-3 text-base text-white/60">
                  <div className="animate-pulse">Загрузка...</div>
                </div>
              ) : contactData ? (
                <ul className="space-y-3 text-base text-white/80">
                  {contactData.email && (
                    <li>
                      <a
                        className="hover:underline"
                        href={contactData.email.href}
                      >
                        {contactData.email.value}
                      </a>
                    </li>
                  )}
                  {contactData.phone && (
                    <li>
                      <a
                        className="hover:underline"
                        href={contactData.phone.href}
                      >
                        {contactData.phone.value}
                      </a>
                    </li>
                  )}
                  {contactData.address && (
                    <li>
                      <span>{contactData.address.value}</span>
                    </li>
                  )}
                </ul>
              ) : (
                <div className="space-y-3 text-base text-white/60">
                  <div>Контактная информация недоступна</div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Следите за нами</h3>
              <div className="flex items-center gap-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:opacity-80 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.177 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.149 4.89a4.106 4.106 0 0 0 1.27 5.477 4.072 4.072 0 0 1-1.86-.513v.052a4.106 4.106 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.19 8.44 9.96v-7.04H7.9v-2.92h2.42V9.41c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.35h-1.2c-1.18 0-1.55.73-1.55 1.49v1.79h2.64l-.42 2.92h-2.22v7.04c4.78-.77 8.44-4.94 8.44-9.96z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.504 3.504 0 0 1 12 9.5zm5.75-3.25a.75.75 0 1 0 .75.75.75.75 0 0 0-.75-.75z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-80 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.14V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.7-2.54 3.48V23h-3.8V8.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="text-base text-white/70">
              © {new Date().getFullYear()} Company. All rights reserved.
            </div>
            <div className="text-sm text-white/60">
              Made with Next.js & Tailwind CSS
            </div>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
