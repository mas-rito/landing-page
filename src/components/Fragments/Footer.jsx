import { backgroundFooter } from "../../assets";
import { socials } from "../../constants";

const Footer = () => {
  return (
    <div
      className="flex flex-wrap justify-between bg-gray-200 py-10 px-6 md:px-20 bg-no-repeat bg-right-bottom"
      style={{ backgroundImage: `url(${backgroundFooter})` }}
    >
      <div className="hidden md:flex flex-col md:w-1/2 gap-8 mb-10 md:mb-0 text-center md:text-start">
        <h1 className="text-black font-bold text-xl">
          Segera gabung ke dalam tim TheWinningHerny
        </h1>
        <div className="">
          <a href="http://" className="btn-primary">
            Gabung Sekarang!
          </a>
        </div>
        <p className="text-black font-semibold text-justify">
          Pan 12: Bantu Rakyat, Bersama Herny Juniarti Kami adalah komunitas
          yang peduli, dipimpin oleh Herny Juniarti. Kami berkomitmen untuk
          mewujudkan perubahan positif. Bergabunglah dengan kami dalam
          menciptakan masa depan yang lebih baik.
        </p>
      </div>
      <div className="flex flex-wrap md:flex-col gap-2 w-full md:w-1/2">
        {socials.map((social) => (
          <div className="flex gap-2 justify-end items-center" key={social.id}>
            <img src={social.logo} alt={social.name} />
            <p className="text-white ">{social.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
