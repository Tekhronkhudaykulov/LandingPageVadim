import ScrollAnimation from "react-animate-on-scroll";

function UsPhilosophy() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="bg-white text-center  w-full py-9 mt-32 mb-14">
        <h3 className="text-[#646464] sm:font-semibold font-extrabold md:text-4xl text-[21px]">
          НАША ФИЛОСОФИЯ
        </h3>
        <p className="text-[#999999] lg:text-[40px] text-[18px] mx-auto text-center max-w-[1133px] w-full mt-2 px-8">
          Мы нацелены на результат. Вы не только увидите результат своими
          глазами, но и почувствуете гармонию и чистоту внутри себя! Чистота
          внутри и вокруг нас, залог успеха и здоровья!
        </p>
      </div>
    </ScrollAnimation>
  );
}

export default UsPhilosophy;
