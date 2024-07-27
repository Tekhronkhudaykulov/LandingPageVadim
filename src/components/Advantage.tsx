import ScrollAnimation from "react-animate-on-scroll";

function Advantage() {
  return (
    <div className="my-8 md:mb-[97px]">
      <p className="uppercase text-center text-[#646464] font-extrabold md:text-[30px] text-[21px]">
        преимущество
      </p>
      <div className="custom-shadow mt-5">
        <div className="advantage-container pt-14 pb-6 grid md:grid-cols-3 gap-y-10 justify-items-center">
          <ScrollAnimation animateIn="fadeIn">
            <div className="grid justify-items-center max-w-[400px] w-full">
              <img width={103} height={103} src="number1.png" alt="" />
              <p className="text-center text-[#BD926D] font-semibold mont xl:text-xl text-lg">
                Наши клининг специалисты, со стажем не менее 5 лет.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={800} animateIn="fadeIn">
            <div className="grid justify-items-center max-w-[400px] w-full">
              <img width={103} height={103} src="number2.png" alt="" />
              <p className="text-center text-[#BD926D] font-semibold mont xl:text-xl text-lg">
                Мы любим дело которым занимаемся. 
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={1600} animateIn="fadeIn">
            <div className="grid justify-items-center max-w-[400px] w-full">
              <img width={103} height={103} src="number3.png" alt="" />
              <p className="text-center text-[#BD926D] font-semibold mont xl:text-xl text-lg">
                Нам не нужно знать квадратуру помещения, чтобы озвучить вам
                стоимость нашей работы, всё намного проще.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
