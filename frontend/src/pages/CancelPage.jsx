import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center p-4">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Payment Canceled ❌</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! Your payment was canceled. You can try again anytime.
      </p>

      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
      >
        Back to Store
      </Link>
    </div>
  );
};

export default Cancel;
