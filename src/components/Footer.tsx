function Footer() {
  return (
    <div className="photo w-full">
      <div className="grid justify-items-center pt-[270px]  max-[1280px]:pt-[400px] max-[725px]:pt-[450px]">
        <h4 className="uppercase text-white mb-[50px] font-semibold xl:text-[33px] text-[26px]">
          оставить заявку ?
        </h4>
        <div className="grid xl:gap-12 gap-6">
          <input
            className="xl:w-[660px] w-[324px] px-4 text-[#926240] font-semibold xl:text-[21px] text-[16px] opacity-35 xl:h-[60px] h-[33px] rounded-3xl"
            type="text"
            defaultValue="ФиО"
          />
          <input
            className="xl:w-[660px] w-[324px] px-4 text-[#926240] font-semibold xl:text-[21px] text-[16px] opacity-35 xl:h-[60px] h-[33px] rounded-3xl"
            type="text"
            defaultValue="+998"
          />
          <input
            className="xl:w-[660px] w-[324px] px-4 text-[#926240] font-semibold xl:text-[21px] text-[16px] opacity-35 xl:h-[60px] h-[33px] rounded-3xl"
            type="text"
            defaultValue="Вопрос (не обязательно)"
          />
          <button className="uppercase hover:opacity-80 active:opacity-65 transition-all bg-white xl:mx-20 mx-[50px] rounded-3xl text-[#926240] text-[23px] xl:py-6 py-[10px]">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
