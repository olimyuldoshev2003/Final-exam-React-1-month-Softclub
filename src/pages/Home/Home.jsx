/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t, i18n } = useTranslation();

    // eslint-disable-next-line no-unused-vars
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  return (
    <div>
      <h1>Hi I'm Home</h1>
    </div>
  );
}

export default Home