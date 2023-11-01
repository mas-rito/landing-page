import { buHernySalam, titleIcon } from "../../assets";
import Container from "../Fragments/Container";

const AboutSection = () => {
  return (
    <Container>
      <div className="flex flex-wrap py-20">
        <div className="w-full md:w-1/3">
          <img src={buHernySalam} alt="Bu Herny Junarti" className="w-full" />
        </div>
        <div className="w-full md:w-2/3 px-3 md:ps-10 ">
          <div className="my-5">
            <h1 className="text-2xl lg:text-4xl font-bold text-black my-3 text-center md:text-start">
              Biodata Saya
            </h1>
            <img src={titleIcon} alt="" className="mx-auto md:mx-0" />
          </div>
          <p className="text-lg text-black text-justify mb-3">
            <span className="font-bold text-blue-800">
              Saya adalah Herny Juniarti,
            </span>{" "}
            atau sering dikenal sebagai{" "}
            <span className="font-bold text-blue-800">Nai Sok Hui.</span> Lahir
            di <span className="font-bold text-blue-800">Kota Pontianak,</span>{" "}
            saya tumbuh dalam keluarga dengan keyakinan agama Katolik yang kuat.
            Perjalanan pendidikan saya dimulai di{" "}
            <span className="font-bold text-blue-800">
              TK Kanisius pada tahun 1977 hingga 1979.
            </span>
          </p>
          <p className="text-lg text-black text-justify mb-3">
            Setelah itu, saya melanjutkan pendidikan dasar saya di{" "}
            <span className="font-bold text-blue-800">
              SD Dahlia dari tahun 1979 hingga 1985.
            </span>{" "}
            Masa-masa itu membentuk dasar yang kuat dalam pembelajaran saya.
            Kemudian, dari tahun 1985 hingga 1988, saya menghadiri{" "}
            <span className="font-bold text-blue-800">SMP Bruder</span>, di mana
            semangat belajar saya terus berkembang dan{" "}
            <span className="font-bold text-blue-800">
              prestasi akademik saya mulai bersinar.
            </span>
          </p>
          <p className="text-lg text-black text-justify mb-3">
            Saat melangkah ke pendidikan menengah atas pada{" "}
            <span className="font-bold text-blue-800">
              tahun 1988 hingga 1991,
            </span>{" "}
            saya masuk{" "}
            <span className="font-bold text-blue-800">SMA Santo Paulus.</span>{" "}
            Selama waktu ini, saya tidak hanya berfokus pada prestasi akademik,
            tetapi juga aktif terlibat dalam berbagai{" "}
            <span className="font-bold text-blue-800">
              kegiatan ekstrakurikuler
            </span>{" "}
            yang membantu{" "}
            <span className="font-bold text-blue-800">
              memperluas pengetahuan dan keterampilan saya.
            </span>
          </p>
          <p className="text-lg text-black text-justify mb-3">
            Jiwa kepemimpinan saya dimulai dari saya bergabung dengan berbagai
            organisasi seperti{" "}
            <span className="font-bold text-blue-800">
              Wanita Katholik Republik Indonesia (WKRI)
            </span>{" "}
            dengan jabatan terakhir{" "}
            <span className="font-bold text-blue-800">Wakil Ketua</span> Begitu
            juga ketika saya berwirausaha dengan tantangan semakin besar. Untuk
            membangun usaha agar semakin berkembang diperlukan kegigihan dan
            kerja keras.
          </p>
          <p className="text-lg text-black text-justify mb-3">
            Biodata saya mencerminkan perjalanan{" "}
            <span className="font-bold text-blue-800">
              pendidikan yang kuat
            </span>{" "}
            dan{" "}
            <span className="font-bold text-blue-800">komitmen yang kuat</span>{" "}
            terhadap pembelajaran. Dengan latar belakang pendidikan yang kuat
            ini, saya <span className="font-bold text-blue-800">optimis</span>{" "}
            bahwa saya akan mencapai banyak{" "}
            <span className="font-bold text-blue-800">
              kesuksesan di masa depan.
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
