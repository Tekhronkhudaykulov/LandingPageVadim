import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
function MainSection() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <div className="bg-[url('/ellipse.svg')] bg-no-repeat bg-left">
          <main className="main-container mt-14">
            <div className="grid sm:grid-cols-2 justify-items-center  lg:gap-6 gap-3 items-center">
              <img
                className="lg:w-[492px] lg:h-[578px] w-[248px] h-[291px]"
                src="main1.png"
                alt="Cleaning Service 1"
              />
              <div>
                <p className="uppercase text-[#646464] text-center sm:text-start lg:font-bold font-light lg:text-[26px] text-[20px]">
                  не знаете за что взяться?
                </p>
                <p className="text-[#999999] lg:text-[28px] text-center sm:text-start text-[18px] mt-4">
                  Не хватает времени на домашние дела и не получается везде
                  успеть!
                  <span className="block lg:mt-7">
                    Переложите свои беспокойства о чистоте на нас!
                  </span>
                </p>
              </div>
            </div>
          </main>
          <main className="main-container mt-14">
            <div className="grid sm:grid-cols-2 justify-items-center  lg:gap-6 gap-3 items-center">
              <img
                className="lg:w-[492px] lg:h-[578px] w-[248px] h-[291px]"
                src="main2.png"
                alt="Cleaning Service 1"
              />
              <div>
                <p className="text-[#999999] lg:text-[28px] text-center sm:text-start text-[18px] mt-4">
                  На сегодняшний день время катастрофически, ни на что, не
                  хват1ает!
                  <span className="block lg:mt-7">
                    Поэтому потратьте своё время с пользой на себя и любимых!
                  </span>
                </p>
              </div>
            </div>
          </main>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default MainSection;
