import ScrollAnimation from "react-animate-on-scroll";

function OurServices() {
  return (
    <div className="bg-[url('/ellipse.svg')] bg-no-repeat">
      <div className="grid gap-3">
        <div className="nav-container grid">
          <ScrollAnimation animateIn="bounceInRight">
            <div className="sm:flex grid gap-y-9 w-full">
              <div className="sm:w-[40%] ">
                <img
                  src="rasm1.png"
                  className="mx-auto w-full sm:h-auto h-[306px] object-cover"
                  alt=""
                />
              </div>
              <div className="bg-[#D8875A] sm:w-[80%]">
                <p className="text-white mont sm:text-3xl text-[26px] text-center h-full content-center py-14">
                  Уборка офисов.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="bounceInLeft">
          <div className="nav-container grid">
            <img
              src="rasm2.png"
              className="mx-auto mb-9 sm:hidden block w-full sm:h-auto h-[306px] object-cover"
              alt=""
            />
            <div className="sm:flex grid gap-y-9 w-full">
              <div className="bg-[#D8875A] sm:w-[80%]">
                <p className="text-white mont sm:text-3xl text-[26px] text-center h-full content-center py-14">
                  Уборка квартир.
                </p>
              </div>
              <div className="sm:w-[40%] ">
                <img
                  src="rasm2.png"
                  className="mx-auto hidden sm:block w-full sm:h-auto h-[306px] object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <p className="uppercase text-center text-[#646464] font-extrabold md:text-[30px] text-[21px] mont my-7">
          Дополнительные услуги
        </p>
      </ScrollAnimation>
      <div className="grid gap-3">
        <ScrollAnimation animateIn="bounceInRight">
          <div className="nav-container grid">
            <div className="sm:flex grid gap-y-9 w-full">
              <div className="sm:w-[40%] ">
                <img
                  src="rasm3.png"
                  className="mx-auto w-full sm:h-auto h-[306px] object-cover"
                  alt=""
                />
              </div>
              <div className="bg-[#E6BF9C] sm:w-[80%]">
                <p className="text-[#AF7859] mont sm:text-3xl text-[26px] text-center h-full content-center py-14">
                  Мытьё окон.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft">
          <div className="nav-container grid">
            <img
              src="rasm4.png"
              className="mx-auto mb-9 sm:hidden block w-full sm:h-auto h-[306px] object-cover"
              alt=""
            />
            <div className="sm:flex grid gap-y-9 w-full">
              <div className="bg-[#E6BF9C] sm:w-[80%]">
                <p className="text-[#AF7859] mont sm:text-3xl text-[26px] text-center h-full content-center py-14">
                  Мытьё посуды.
                </p>
              </div>
              <div className="sm:w-[40%] ">
                <img
                  src="rasm4.png"
                  className="mx-auto hidden sm:block w-full sm:h-auto h-[306px] object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft">
          <div className="nav-container grid">
            <div className="sm:flex grid gap-y-9 w-full">
              <div className="sm:w-[40%] ">
                <img
                  src="rasm5.png"
                  className="mx-auto w-full sm:h-auto h-[306px] object-cover"
                  alt=""
                />
              </div>
              <div className="bg-[#E6BF9C] sm:w-[80%]">
                <p className="text-[#AF7859] mont sm:text-3xl text-[26px] text-center h-full content-center py-14">
                  Глажка.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default OurServices;
