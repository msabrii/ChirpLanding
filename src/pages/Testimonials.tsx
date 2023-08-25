import React from "react";
import userAvatar01 from "../assets/userAvatar01.svg";
import userAvatar02 from "../assets/userAvatar02.svg";
import userAvatar03 from "../assets/userAvatar03.svg";
import TwitterBlue from "../assets/Twitter (Blue).svg";
import reactSVG from "../assets/Like.svg";

interface TestimonialData {
  img: string;
  name: string;
  username: string;
  text: string;
  date: string;
  likes: number;
}

const data: TestimonialData[] = [
  {
    img: userAvatar01,
    name: "Sara May",
    username: "sara_may",
    text: "I just tried out @chirp and it's amazing, love all the analytics I can see.",
    date: "March 2, 2021",
    likes: 2,
  },
  {
    img: userAvatar02,
    name: "Jack Scott",
    username: "jack_scott_",
    text: "I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
    date: "March 2, 2021",
    likes: 32,
  },
  {
    img: userAvatar03,
    name: "Jessica May",
    username: "jmay98",
    text: "Absolutely love everything about Chirp, from the design to how everything works smoothly.",
    date: "March 2, 2021",
    likes: 221,
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col md:px-10 px-4 lg:px-20 xl:px-32 2xl:px-64 mt-16 mb-16">
      <h2 className="mb-8 font-bold">What our customers say</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        {data.map((testimonial) => (
          <TestimonialCard {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialData> = ({
  img,
  name,
  username,
  text,
  date,
  likes,
}) => {
  return (
    <div className="flex flex-col bg-white justify-center items-start mb-5 md:mb-0 md:mr-4 p-5 w-full md:w-1/2 rounded-md max-w-xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex">
          <img src={img} />
          <div className="flex flex-col justify-center items-start ml-3">
            <p className="font-semibold text-md">{name}</p>
            <p className="text-grey text-xs">@{username}</p>
          </div>
        </div>
        <img src={TwitterBlue} className="mr-1" />
      </div>
      <p className="text-grey text-base mt-3 opacity-90">{text}</p>
      <div className="flex justify-between w-full mt-5 text-grey items-center text-base opacity-80">
        <div className="flex">
          <img src={reactSVG} className="mr-1" />
          <p>{likes}</p>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Testimonials;
