import Container from "../Fragments/Container";

const JoinSection = () => {
  return (
    <Container>
      <div className="my-20 bg-zinc-100 flex flex-wrap justify-evenly rounded-2xl py-10 px-3 md:px-28">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-bold text-black mb-10 text-center md:text-start">
            Ingin Gabung Ke Tim Pemenang Herny?
          </h1>
          <div className="text-center md:text-start my-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScg42BqJ57DDVQKJ1oKPsNuWSlZHbvmDzMFXBo3JxHaemY8GA/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Gabung Sekarang!
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-black font-semibold text-lg text-justify">
            <span className="font-bold text-blue-700">
              Apa sih Tim Pemenangan Herny?{" "}
            </span>
            Tim Pemenangan Herny Yaitu Tim yang memenangkan Ibu Herny Juniarti,
            SE untuk duduk sebagai anggota DPR RI. Silahkan Anda klik bila Anda
            siap mendapatkan keuntungan..
          </p>
        </div>
      </div>
    </Container>
  );
};

export default JoinSection;
