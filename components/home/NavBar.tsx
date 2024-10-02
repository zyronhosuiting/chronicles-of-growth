import React from "react";

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
          <div className="flex items-center gap-5">
            {/* TODO:Logo */}
            <div className="w-10 h-10 bg-white rounded-full"></div>
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
