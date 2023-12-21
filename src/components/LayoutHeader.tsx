const navItems = [
  {
    name: "Work",
    action: "redirect",
  },
  {
    name: "Contact",
    action: "redirect",
  },
];

const LayoutHeader = () => {
  return (
    <nav className="flex justify-between w-full items-center py-4 bg-black sticky top-0 z-50">
      <button>
        <svg
          className="h-7"
          viewBox="0 0 109 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="108.952"
            height="9"
            rx="4.5"
            fill="white"
            fillOpacity="0.8"
          />
          <rect
            y="36"
            width="72.6344"
            height="9"
            rx="4.5"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      </button>

      <button className="absolute m-auto left-0 right-0 w-fit">
        <svg
          className="h-10"
          viewBox="0 0 24 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8023 39.8153H10.9008L11.2841 0H13.5285L13.8023 39.8153Z"
            fill="#D3FD06"
          />
          <path
            d="M4.22227 18.2323C5.80695 17.023 7.70592 16.2875 9.69653 16.1119V18.504C8.49621 18.6824 7.36379 19.1698 6.41194 19.9176C5.6969 20.4232 5.11475 21.0918 4.7146 21.8677C4.31445 22.6436 4.10805 23.5036 4.11276 24.3753C4.09325 25.1746 4.26696 25.9672 4.61938 26.6861C4.9718 27.405 5.49263 28.0293 6.13821 28.5071C7.21066 29.3184 8.41382 29.9436 9.69653 30.3557V33.1284C7.91112 32.5994 6.214 31.8117 4.66014 30.7907C3.60636 30.0945 2.74411 29.1479 2.15147 28.0373C1.55883 26.9266 1.25454 25.6866 1.26613 24.4297C1.2135 23.2357 1.45528 22.0472 1.97046 20.9671C2.48563 19.887 3.25866 18.9482 4.22227 18.2323Z"
            fill="#D3FD06"
          />
          <path
            d="M23.7654 25.7888H20.9187C20.9566 24.766 20.7651 23.7477 20.358 22.8074C19.9509 21.8672 19.3384 21.0285 18.5648 20.3523C17.6111 19.5108 16.4647 18.9135 15.2255 18.6125V16.1663C16.2656 16.3692 17.2768 16.6978 18.2364 17.1449C19.9088 17.9467 21.3286 19.1874 22.3421 20.7329C23.3016 22.2449 23.7962 24.0019 23.7654 25.7888Z"
            fill="#D3FD06"
          />
          <path
            d="M23.9843 41.3377C24.0207 42.5675 23.7499 43.787 23.1958 44.8875C22.6418 45.988 21.8218 46.935 20.8093 47.6439C18.3716 49.3141 15.4458 50.1361 12.4884 49.9816C10.2525 50.0251 8.03252 49.5991 5.97399 48.7313C4.17186 48.0244 2.61332 46.8163 1.48514 45.2518C0.448155 43.6307 -0.0673994 41.7344 0.00706592 39.8153H2.79891C2.77497 40.8685 3.00612 41.912 3.47292 42.8581C3.93971 43.8041 4.62852 44.6252 5.48132 45.2518C7.50975 46.7173 9.98335 47.4466 12.4884 47.3177C14.7201 47.4207 16.9263 46.811 18.7837 45.578C19.5165 45.0732 20.1141 44.3984 20.5243 43.612C20.9346 42.8255 21.1451 41.9512 21.1377 41.0656C21.1721 40.2305 21.0122 39.399 20.6704 38.6353C20.3286 37.8716 19.8142 37.1962 19.167 36.662C17.9796 35.771 16.6462 35.0905 15.2255 34.6505V31.8237C16.6514 32.2599 18.0274 32.8427 19.3312 33.5631C20.7226 34.316 21.9212 35.3762 22.8347 36.662C23.686 38.0688 24.0869 39.6995 23.9843 41.3377Z"
            fill="#D3FD06"
          />
        </svg>
      </button>

      <ul className="flex justify-end space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              className="rounded-full  border-white uppercase px-10 py-1 text-white text-lg font-light"
              style={{
                borderWidth: "0.1px",
                borderStyle: "solid",
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LayoutHeader;