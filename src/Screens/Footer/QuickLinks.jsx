/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-6 sm:mt-6 md:mt-0">
  <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Quick Links</h2>
  <nav className="mt-4">
    <ul className="list-disc list-inside text-sm sm:text-base">
      <li className="mt-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="hover:text-teal-500"
        >
          Home
        </a>
      </li>
      <li className="mt-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/about');
          }}
          className="hover:text-teal-500"
        >
          About
        </a>
      </li>
      <li className="mt-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/contact');
          }}
          className="hover:text-teal-500"
        >
          Contact
        </a>
      </li>
      <li className="mt-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/services');
          }}
          className="hover:text-teal-500"
        >
          Services
        </a>
      </li>
      <li className="mt-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/faq');
          }}
          className="hover:text-teal-500"
        >
          FAQ
        </a>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default QuickLinks;
