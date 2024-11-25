import React from 'react'

const Cover = ({coverImg,title }) => {
  return (
    <div class="h-full flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
      <p class="text-gray-600 text-lg mb-6">
        Discover amazing content and experiences tailored for you.
      </p>
      <button class="bg-primary hover:bg-primary text-white py-2 px-6 rounded-lg text-lg shadow">
        Get Started
      </button>
    </div>
  </div>
  

  )
}

export default Cover
