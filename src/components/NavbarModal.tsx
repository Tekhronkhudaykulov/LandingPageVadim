import { useEffect } from "react";

function NavbarModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-[9999] duration-300 ease-in-out ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white p-6 md:p-8 lg:p-12 overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out transform ${
          show ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex items-start mt-[50px] gap-y-[15px] flex-col space-y-4 text-center">
          <a href="#home" className="text-gray-800 text-lg hover:text-blue-600">
            Home
          </a>

          <a
            href="#about"
            className="text-gray-800 text-lg hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-800 text-lg hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-800 text-lg hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default NavbarModal;
