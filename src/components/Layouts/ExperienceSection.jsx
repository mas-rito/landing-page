import React from "react";
import Container from "../Fragments/Container";
import { titleIcon } from "../../assets";
import { pengalaman } from "../../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceSection = () => {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-2xl lg:text-4xl font-bold text-black my-3 text-center">
          Pengalaman Kerja & wirausaha
        </h1>
        <img src={titleIcon} alt="" className="mx-auto mt-6" />
      </div>
      <VerticalTimeline lineColor={"#b8c6ff"}>
        {pengalaman.map((pengalaman, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#b8c6ff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #b8c6ff" }}
            date={pengalaman.date}
            iconStyle={{ background: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={pengalaman.logo}
                  alt={pengalaman.company}
                  className="object-cover"
                />
              </div>
            }
          >
            <div>
              <h3 className="text-black text-[24px] font-bold">
                {pengalaman.position}
              </h3>
              <p
                className="text-slate-800 text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {pengalaman.company}
              </p>
            </div>
            {pengalaman.achievement ? (
              <ul className="mt-2 list-disc ml-5 space-y-2">
                <h1 className="text-lg font-bold">Pencapaian</h1>
                {pengalaman.achievement.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-black-100 font-semibold text-[14px] pl-1 tracking-wider"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            ) : null}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default ExperienceSection;
