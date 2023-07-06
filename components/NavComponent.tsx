"use client";
import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";
import Link from "next/link";

export default function NavComponent() {
  const ref = useRef<HTMLDivElement>(null);

  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="sticky top-0 z-10 navv text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500">
      <style jsx>{`
        .navv {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(15px);
        }
      `}</style>

      <div className="w-full container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 sm:justify-between sm:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#home">
                <h1 className="flex flex-col">ProseMaster</h1>
              </Link>
            </div>
            <div className="-mr-2 -my-2 sm:hidden">
              <>
                {isModalOpen ? (
                  <div
                    ref={ref}
                    className="fixed w-[24rem] right-0 top-0 p-2 h-[100vh] transition transform md:hidden"
                  >
                    <div className="rounded-lg shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-[#141628] border-[1px] border-red-100/20 text-white divide-y-2 divide-gray-50">
                      <div className="pt-5 pb-6 px-5">
                        <div className="-mr-2 float-right mb-3">
                          <button
                            onClick={() => setModalOpen(!true)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100"
                          >
                            <span className="sr-only">Close menu</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center lg:hidden text-white focus-visible:ring ring-indigo-300 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            </div>
            <nav className="hidden sm:flex space-x-10 items-center">
              <a
                className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
                href="https://github.com/doniaskima"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                <p>Star on GitHub</p>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Github({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
