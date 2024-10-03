import React from "react";
import Image from "next/image";

const NavBar = () => {
  const NavBarButtons = [
    {
      title: "Home",
    },
    {
      title: "Projects",
    },

    {
      title: "Stories",
    },
    {
      title: "Media",
    },

    {
      title: "Status",
    },
    {
      title: "More",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-blue-950 to-transparent">
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/home/icon.webp"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />

            <h1 className="text-white font-source-han-serif-cn">
              The Zyron Chronicles
            </h1>
          </div>

          <div className="flex items-center space-x-14">
            {NavBarButtons.map((button) => (
              <button
                key={button.title}
                className="text-white font-source-han-serif-cn"
              >
                {button.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
