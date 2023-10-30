import Container from "../Fragments/Container";
import { galeries } from "../../constants";

const DocumentationSection = () => {
  return (
    <Container>
      <h1 className="text-2xl lg:text-4xl font-bold text-black text-center my-10">
        Dokumentasi
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {galeries.map((galery, index) => (
          <img src={galery.image} alt="" key={index} />
        ))}
      </div>
    </Container>
  );
};

export default DocumentationSection;
