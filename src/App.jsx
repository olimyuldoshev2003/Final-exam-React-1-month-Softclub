// eslint-disable-next-line no-unused-vars
import axios from "axios";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

//For AOS animation
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

//For animate.css
// import "animate.css";



function App() {
  // const { t, i18n } = useTranslation();

  // // eslint-disable-next-line no-unused-vars
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  //For AOS animation
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "*",
      element:<NotFound/>
    }
  ]);

  return (
    <>
      {/* <div
        className=" bg-white dark:bg-black
    "
      >
        <div className="dark-mode">
          <Switcher />
        </div>
        <select
          onChange={(event) => changeLanguage(event.target.value)}
          name=""
          id=""
          className="outline-none sm:hidden text-[15px] text-[#272727] dark:text-[white] dark:border-[1px] dark:bg-[black] dark:border-[white]"
        >
          <option value="">Lang</option>
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="tj">Tj</option>
        </select>
      </div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
