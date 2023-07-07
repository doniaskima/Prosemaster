import React from "react";

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b border-gray-700 py-6">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100066262854435"
              className="text-gray-400 hover:text-indigo-500 transition duration-100"
            >
              Facebook
            </a>
            <a
              target="_blank"
              href="https://twitter.com/DoniaSkima?fbclid=IwAR1ZkYGgzTD3m0cKFZQ9C-Dp8u1SghN6TAqf7geIbUJP4IYzKAinelq4J18"
              className="text-gray-400 hover:text-indigo-500 transition duration-100"
            >
              Twitter
            </a>
            <a
              target="_blank"
              href="https://medium.com/@doniaskima344"
              className="text-gray-400 hover:text-indigo-500 transition duration-100"
            >
              Medium
            </a>
            <a
              target="_blank"
              href="mailto:doniaskima344@gmail.com"
              className="text-gray-400 hover:text-indigo-500 transition duration-100"
            >
              Contact
            </a>
          </nav>
          <a href="#" className="text-indigo-500 hover:text-indigo-600 transition duration-100">
            Back to the top
          </a>
        </div>

        <div className="text-gray-400 text-sm text-center md:text-start flex flex-col md:flex-row py-8 justify-between">
          <div className="flex justify-center md:justify-start">
            <h1 className="mr-4">Privacy Policy</h1>
            <h1>Terms and Conditions</h1>
          </div>
          <div className="mt-4 md:mt-0">© All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
