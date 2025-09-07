const WidgetCard = ({ title, value, icon, trendIcon, trendText }) => {
  return (
    <div className="border-gray-200 dark:bg-secondary py-5 px-6 rounded-3xl flex items-center justify-between bg-white hover:scale-105 transition-all">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-bold text-lg dark:text-white text-black">
              {title}
            </h1>
            <h2 className="text-black dark:text-white font-bold text-5xl">
              {value}
            </h2>
          </div>
          {icon}
        </div>
        <div className="flex items-center gap-2 mt-4">
          {trendIcon}
          <h1 className="text-base">{trendText}</h1>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
