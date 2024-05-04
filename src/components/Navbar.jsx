export const Navbar = () => {
  return (
    <header className="pt-7 w-full px-6">
      <nav className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src="/images/menu.svg" alt="logo text" />
          <img src="/images/logo.svg" alt="logo text" />
          <img src="/images/logo-text.svg" alt="logo text" />
        </div>
        <div className="h-9 p-2 bg-gradient-to-tl from-sky-900 via-cyan-600 to-sky-900 rounded-lg justify-center items-center gap-1 flex">
          <img src="/images/em.svg" alt="em" />
          <span className="text-white text-xs font-medium font-['Cairo']">
            الامارات
          </span>
          <img
            src="/icons/arrow-down.svg"
            alt="arrow-down"
            className="w-6 h-6"
          />
        </div>
      </nav>
    </header>
  );
};
