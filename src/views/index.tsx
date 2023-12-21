import IntroSection from "../components/IntroSection";
import PresentationTitle from "../components/PresentationTitle";
type Props = {};

const index = (props: Props) => {
  return (
    <div className="py-4">
      <IntroSection />
      <PresentationTitle />

      <span className="text-left font-light text-lg text-white w-1/3 block my-4">
        My approach is to help my clients to visualize and communicate the best
        of themselves.
      </span>
    </div>
  );
};

export default index;
