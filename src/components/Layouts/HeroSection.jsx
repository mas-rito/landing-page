import { backgroundHero, buHerny, fotoGroup } from "../../assets";
import Container from "../Fragments/Container";

const HeroSection = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: `url(${backgroundHero})` }}
      >
        <Container>
          <div className="flex">
            <div className="flex flex-col w-2/3">
              <div className="flex justify-between text-white text-4xl font-bold my-4">
                <h1>#WanitaPermataMulia</h1>
                <h1>#HernyTerbuktiAmanah</h1>
              </div>
              <img src={fotoGroup} className="" alt="" />
            </div>
            <img src={buHerny} alt="Herny Junarti, S.E" className="w-1/3" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
