import React from "react";
import Container from "../Fragments/Container";
import { organisasiBg, titleIcon, plus } from "../../assets";

const Organization = () => {
  return (
    <div
      className=" bg-contain md:bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${organisasiBg})` }}
    >
      <Container classname={"flex justify-center items-center min-h-screen"}>
        <div className="bg-white w-full md:w-10/12 rounded-2xl px-10 pt-10 pb-16 mt-32 relative">
          <img
            src={plus}
            alt="plus"
            className="w-8 h-8 absolute top-10 right-10"
          />
          <img
            src={plus}
            alt="plus"
            className="w-8 h-8 absolute bottom-10 left-10"
          />
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-center">Organisasi</h1>
            <img src={titleIcon} alt="" className="mx-auto mt-3" />
          </div>
          <div className="w-full">
            <ul className="list-disc text-black font-bold pl-5 md:grid md:grid-cols-2">
              <li className="mb-6 mx-2">
                Bendahara Dewan Pastoral Paroki (DPP) Katedral Santo Yosef
                Pontianak , selama 3 periode (9 tahun)
              </li>
              <li className="mb-6 mx-2">
                Wakil Ketua Wanita Katholik Republik Indonesia (WKRI) Paroki
                Katedral Santo Yosef Pontianak
              </li>
              <li className="mb-6 mx-2">
                Ketua Lingkungan Gajah Mada (Kring Santa Theressia Avilla)
                Paroki Katedral Santo Yosef Pontianak , selama 3 periode (9
                Tahun)
              </li>
              <li className="mb-6 mx-2">
                Penasihat Kring Santa Theresia Avilla.
              </li>
              <li className="mb-6 mx-2">
                Ketua Pengawas Credit Union (CU) Muara Kasih
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Organization;
