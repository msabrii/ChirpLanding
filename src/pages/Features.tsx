import React from "react";

const data = [
  {
    text: "We consistently monitor your audience as it grows- so you can Tweet when your followers are most likely to be online and ready to be engage with your content.",
    icon: "📈",
    title: "Analytics",
  },
  {
    text: "We consistently monitor your audience as it grows- so you can Tweet when your followers are most likely to be online and ready to be engage with your content.",
    icon: "🤓",
    title: "Smart Analyzer",
  },
  {
    text: "We consistently monitor your audience as it grows- so you can Tweet when your followers are most likely to be online and ready to be engage with your content.",
    icon: "💸",
    title: "Scheduled your Tweets",
  },
  {
    text: "We consistently monitor your audience as it grows- so you can Tweet when your followers are most likely to be online and ready to be engage with your content.",
    icon: "☀︎",
    title: "Dark Mode",
  },
];

const Features = () => {
  return (
    <div className="md:px-10 px-4 lg:px-20 xl:px-32 2xl:px-64 flex flex-col mt-16">
      <h2 className="font-bold max-w-md leading-snug text-4xl">
        Features that help you Tweet smarter.
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center mt-5 mb-16 gap-6 lg:flex-wrap">
        {data.map(({ icon, text, title }) => (
          <FeatureCard icon={icon} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Features;

const FeatureCard: React.FC<{ icon: string; title: string; text: string }> = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="border w-full lg:w-[48.5%] min-h-[2rem] flex flex-col items-start justify-center p-5 rounded-sm lg:mb-2">
      <p className="text-4xl mb-3">{icon}</p>
      <h3 className="mb-4 font-bold text-xl">{title}</h3>
      <p className="text-grey leading-7 text-base">{text}</p>
    </div>
  );
};
