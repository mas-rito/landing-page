import Container from "../Fragments/Container";
import { galeries } from "../../constants";

const DocumentationSection = () => {
  return (
    <Container classname={"py-20"}>
      <h1 className="text-2xl lg:text-4xl font-bold text-black text-center py-10">
        Dokumentasi
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {galeries.map((galery, index) => (
          <img
            src={galery.image}
            alt="hai"
            loading="lazy"
            className="md:w-5/12 lg:w-3/12 rounded-xl shadow-xl"
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default DocumentationSection;
