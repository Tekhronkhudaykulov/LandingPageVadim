import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import NavbarModal from "./NavbarModal";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header
        className={`h-screen bg-cover   bg-center bg-[url('/header-bg.jpeg')] max-w-full w-full `}
      >
        <div className="bg-[#69522E] z-[9999] fixed w-full bg-opacity-65 h-[50px]">
          <div
            className={`nav-container  text-white h-full items-center flex justify-between `}
          >
            <h2 className="font-bold rel text-2xl">Чисто и точка.</h2>
            <ul className="gap-6 text-sm mont font-semibold flex max-[568px]:hidden">
              <a className="hover:opacity-60 transition-all" href="#">
                Главная
              </a>
              <a className="hover:opacity-60 transition-all" href="#">
                Занятия
              </a>
              <a className="hover:opacity-60 transition-all" href="#">
                О нас
              </a>
              <a className="hover:opacity-60 transition-all" href="#">
                Контакты
              </a>
            </ul>
            <svg
              onClick={() => setShow(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hidden max-[568px]:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="nav-container  flex items-center justify-center flex-col h-[100vh]  gap-16">
          <h1 className="text-center w-[80%] font-medium md:text-[63px]  text-[29px]  text-white">
            Чистота-это Гармония Bашей жизни!
          </h1>
          <button className="text-white bg-[#0000006E] border-white md:border-[3px] border md:px-7 px-3 py-4 font-medium md:text-lg text-[10px] rounded-2xl">
            Связаться с нами +998 94 471 23 53
          </button>
        </div>
        <div className="bg-[url('/wave.png')] hidden md:block absolute left-0 right-0 bottom-0 h-[80px] max-w-full w-full bg-center"></div>
        <div className="bg-[url('/wave2.png')] block md:hidden absolute left-0 right-0 h-[16px] max-w-full w-full bottom-0 bg-center"></div>
      </header>
      <NavbarModal show={show} onClose={() => setShow(false)} />
    </>
  );
}
export default Navbar;
