import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">
            HOME
          </div>
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">
            CATEGORIES
          </div>
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">{`MEN'S`}</div>
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">{`WOMEN'S`}</div>
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">
            JEWELRY
          </div>
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">
            PERFUME
          </div>
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">
            BLOG
          </div>
          <div className="relative cursor-pointer hover:text-accent transition-all duration-400 after:absolute after:bg-accent after:h-[3px] after:w-full after:bottom-[-5px] after:left-0 after:scale-0 after:origin-left after:transition-all hover:after:scale-100">
            HOT OFFERS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
