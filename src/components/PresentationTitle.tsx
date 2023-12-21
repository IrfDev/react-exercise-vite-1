const TITLES_REPETITION = 2;

const PresentationTitle = () => {
  const emptyTitleArray = new Array(TITLES_REPETITION).fill(undefined);

  console.log("emptyTitleArray", emptyTitleArray);
  return (
    <div className="py-10 px-10 rounded-2xl font-bold text-black bg-secondary text-7xl space-y-7 uppercase my-10">
      {emptyTitleArray.map((_, index) => (
        <div
          key={index}
          className={`flex justify-between ${
            index % 2 == 0 ? "" : "flex-row-reverse"
          }`}
        >
          <span>// A digital designer//</span>
          <svg
            className="w-10"
            viewBox="0 0 50 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25.5619" r="25" fill="black" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default PresentationTitle;
