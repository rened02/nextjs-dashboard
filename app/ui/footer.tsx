import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6"> {/* Cambiado a azul */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-200 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-200 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-200 hover:text-white">Contact</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.73 1.04A4.28 4.28 0 0 0 11.64 8a12.13 12.13 0 0 1-8.8-4.45 4.26 4.26 0 0 0 1.33 5.71A4.27 4.27 0 0 1 2.8 8.8v.05a4.28 4.28 0 0 0 3.42 4.2 4.28 4.28 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98A8.57 8.57 0 0 1 2 18.55 12.1 12.1 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.35 8.35 0 0 0 22.46 6z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .29A12 12 0 0 0 .29 12c0 5.15 3.28 9.52 7.82 11.09.57.1.77-.25.77-.55v-2.17c-3.18.69-3.86-1.54-3.86-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.35.95.1-.75.4-1.25.72-1.53-2.54-.29-5.22-1.28-5.22-5.7 0-1.26.44-2.3 1.17-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.85 10.85 0 0 1 5.71 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.72.81 1.17 1.85 1.17 3.11 0 4.42-2.68 5.41-5.23 5.7.41.36.77 1.09.77 2.21v3.28c0 .3.2.65.78.55a12 12 0 0 0-8.61-11.37z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 5 3.5 9.1 8.1 9.9v-7h-2.4v-2.8H10v-2.2c0-2.4 1.5-3.8 3.6-3.8 1 0 2 .1 2.3.1v2.6h-1.6c-1.3 0-1.5.7-1.5 1.5v1.8h2.8l-.3 2.8H13v7c4.7-.7 8.1-4.8 8.1-9.9z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
