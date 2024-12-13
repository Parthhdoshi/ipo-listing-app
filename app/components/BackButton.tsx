"use client";

import { useRouter } from 'next/navigation'
import React from "react";

const BackButton = () => {
    
  const router = useRouter()
  return (
    <button
      className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
      onClick={() => router.push('/')}
    >
      &larr;
      
    </button>
  );
};

export default BackButton;
