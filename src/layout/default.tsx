import LayoutHeader from "../components/LayoutHeader";

const defaultLayout = ({ children }) => {
  return (
    <main className=" bg-black px-10  static">
      <div className="max-w-7xl mx-auto static overflow-visible">
        <LayoutHeader />
        {children}
      </div>
    </main>
  );
};

export default defaultLayout;
