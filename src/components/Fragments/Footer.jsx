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
          Segera gabung ke dalam{" "}
          <span className="text-blue-700">Tim Pemenangan Herny</span>
        </h1>
        <div className="">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScg42BqJ57DDVQKJ1oKPsNuWSlZHbvmDzMFXBo3JxHaemY8GA/viewform?usp=sf_link"
            target="_blank"
            className="btn-primary"
            rel="noreferrer"
          >
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
      <div className="flex justify-end items-end w-full md:w-1/2">
        <div className="flex flex-wrap md:flex-col gap-2">
          {socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              className="flex gap-2 justify-start items-center"
              key={social.id}
              rel="noreferrer"
            >
              <img
                src={social.logo}
                alt={social.name}
                className="w-8 md:w-12"
              />
              <p className="text-white ">{social.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
