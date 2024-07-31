import axios from "axios";
import { useState } from "react";

function Footer() {
  const [client_name, setName] = useState("");
  const [phone_number, setPhone] = useState("");

  const payload = {
    client_name,
    phone_number,
  };

  const postNomer = async () => {
    try {
      const response = await axios.post(
        `https://lid-sender-bot.onrender.com/api/bot`,
        payload
      );
      console.log(response);

      setName("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="photo w-full">
      <div className="grid justify-items-center md:pt-[400px] pt-[270px]">
        <h4 className="uppercase text-white mb-[50px] font-semibold xl:text-[33px] text-[26px]">
          оставить заявку ?
        </h4>
        <div className="grid xl:gap-12 gap-6">
          <input
            className="xl:w-[660px] w-[324px] px-4 text-[#926240] font-semibold xl:text-[21px] text-[16px] opacity-35 xl:h-[60px] h-[33px] rounded-3xl"
            type="text"
            placeholder="Ф.И.О"
            onChange={(e) => setName(e.target.value)}
            value={client_name}
          />
          <input
            className="xl:w-[660px] w-[324px] px-4 text-[#926240] font-semibold xl:text-[21px] text-[16px] opacity-35 xl:h-[60px] h-[33px] rounded-3xl"
            type="text"
            placeholder="+998"
            onChange={(e) => setPhone(e.target.value)}
            value={phone_number}
          />

          <button
            onClick={postNomer}
            className="uppercase hover:opacity-80 active:opacity-65 transition-all bg-white xl:mx-20 mx-[50px] rounded-3xl text-[#926240] text-[23px] xl:py-6 py-[10px]"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
