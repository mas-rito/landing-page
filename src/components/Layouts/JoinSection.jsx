import React from "react";
import Container from "../Fragments/Container";

const JoinSection = () => {
  return (
    <Container>
      <div className="my-20 bg-zinc-300 flex flex-wrap justify-evenly rounded-2xl py-16 px-3 md:px-28">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-bold text-black mb-10 text-center md:text-start">
            Ingin Gabung Ke Tim Pemenang Herny?
          </h1>
          <div className="text-center md:text-start my-8">
            <a
              href="http://"
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
              Apasih Tim Pemenang Herny?{" "}
            </span>
            TheWinningHerny adalah Lorem ipsum dolor sit amet consectetur.
            Commodo proin non nunc nulla cum turpis. Egestas tellus cursus
            pellentesque porttitor pellentesque nunc. Gravida sagittis elit urna
            nullam. Urna suspendisse eleifend morbi volutpat diam nibh amet
            molestie. Nisl ut phasellus vitae arcu ullamcorper mauris purus. Id
            id facilisis nibh bibendum scelerisque interdum pharetra.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default JoinSection;
