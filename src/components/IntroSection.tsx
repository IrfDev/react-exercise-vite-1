type Props = {};

const IntroSection = (props: Props) => {
  return (
    <section className="flex space-x-14 justify-start items-stretch relative py-5">
      <div className="h-[60vh] w-[60vh] bg-gray-400 rounded-3xl bg-cover bg-center bg-no-repeat"></div>

      <h1 className="block text-[9rem] font-semibold text-secondary w-1/3 leading-[9rem] select-none">
        I'm Ivan Stark
      </h1>

      <svg
        className="w-1/6 absolute top-0 right-0  pointer-events-none"
        viewBox="0 0 300 386"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M91.3686 359.477L90.7346 361.472L92.757 362.014L179.445 385.242L181.466 385.784L181.915 383.74L204.335 281.82L261.209 355.652L262.436 357.244L264.022 356.009L334.786 300.914L336.537 299.55L335 297.95L254.714 214.385L365.698 183.322L367.831 182.725L367.02 180.664L334.472 97.8861L333.747 96.0412L331.895 96.7502L243.681 130.537L278.807 26.8777L279.492 24.8564L277.43 24.304L189.555 0.75795L187.516 0.21151L187.081 2.27742L164.548 109.211L106.836 33.9261L105.61 32.3269L104.02 33.5648L33.2563 88.6603L31.5264 90.0072L33.026 91.6065L113.966 177.924L2.22076 211.345L0.136465 211.969L0.932545 213.993L33.4809 296.771L34.2321 298.682L36.1225 297.881L122.574 261.249L91.3686 359.477Z"
          stroke="#D3FD06"
          strokeWidth="4"
        />
      </svg>
    </section>
  );
};

export default IntroSection;
