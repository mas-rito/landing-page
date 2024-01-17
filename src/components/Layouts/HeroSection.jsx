import Container from "../Fragments/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VisiMisi = (props) => {
  const { children, title, bg } = props;

  const bgCardTop = "/assets/elements/bg-card-top.png";
  const bgCardBottom = "/assets/elements/bg-card-bottom.png";

  return (
    <div className="px-2 mb-4 lg:mb-0 w-full md:w-5/12 lg:w-4/12">
      <div className="relative">
        {bg && (
          <img
            src={bg == "top" ? bgCardTop : bgCardBottom}
            alt=""
            className={`absolute ${
              bg == "top" ? "top-0 left-0" : "bottom-0 right-0"
            } w-1/2 z-10`}
          />
        )}
        <div className="flex flex-col p-6 rounded-xl border-2 border-blue-500 bg-white">
          <div className="flex justify-center mt-3">
            <h1 className="text-center bg-blue-600 px-4 py-2 font-bold text-3xl text-white rounded-lg">
              {title}
            </h1>
          </div>
          <div className="text-blue-600 font-bold my-5 z-20 md:min-h-[260px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const backgroundHero = "/assets/image/background.png";
  const buHerny = "/assets/image/foto-bu-herny.png";
  const fotoGroup = "/assets/image/foto-group-hero.png";

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${backgroundHero})` }}
      >
        <Container>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="flex flex-col w-full lg:w-2/3">
              <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold my-4">
                <h1 className="w-full">#WanitaPermataMulia</h1>
                <h1>#HernyTerbuktiAmanah</h1>
              </div>
              <LazyLoadImage
                src={fotoGroup}
                className="hidden lg:block"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/3">
              <LazyLoadImage
                src={buHerny}
                alt="Herny Junarti, S.E"
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-evenly -mt-20 mb-10">
        <VisiMisi title="Visi" bg="top">
          <p className="text-xl md:text-2xl lg:text-3xl text-center">
            Berperan Aktif Untuk Mewujudkan Masyarakat Madani Adil Dan Makmur
          </p>
        </VisiMisi>

        <VisiMisi title="Misi">
          <ul className="list-disc ms-10 text-lg md:text-xl lg:text-2xl h-full flex flex-col justify-evenly">
            <li>Dekat Dan Membela Kepentingan Rakyat</li>
            <li>
              Mengemban Amanah Dari rakyat Dengan Kejujuran, Anti Korupsi Dan
              Welas Asih
            </li>
            <li>Memajukan Kesejahteraan Umum Dan Mencerdaskan Rakyat</li>
          </ul>
        </VisiMisi>

        <VisiMisi title="PROGRAM KERJA" bg="bottom">
          <ul className="list-disc ms-10 text-2xl h-full flex flex-col justify-evenly">
            <li>PENDIDIKAN</li>
            <li>KESEHATAN</li>
            <li>ANAK MUDA</li>
            <li>PETANI DAN TAMBANG</li>
            <li>UMKM</li>
          </ul>
        </VisiMisi>
      </div>
    </>
  );
};

export default HeroSection;
