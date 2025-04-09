import { useState } from "react";

const CustomCarousel = () => {
  const imgs = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1526692202263-843e30c353e8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "models",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1531901390263-0016793c7c7d?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "models2",
    },
  ];

  return <div className="w-full h-[600px] rounded-2xl overflow-hidden">
    {imgs.map((img) => (
      <div className="w-full h-full" key={img.id}>
        <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
      </div>
    ))}
  </div>;
};

export default CustomCarousel;
