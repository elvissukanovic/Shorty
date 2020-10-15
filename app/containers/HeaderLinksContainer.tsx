/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import DataManager from '../data/DataManager';
import HeaderLink from '../components/HeaderLink';
import { HeaderLinkData } from '../data/models/HeaderLinkData';
import styles from '../styles/headerLinksContainer.css';

export default function HeaderLinksContainer() {
  const empty: HeaderLinkData[] = [];
  const [headerLinksArray, setHeaderLinksArray] = useState(empty);

  useEffect(() => {
    async function loadData() {
      const tmp = await DataManager.LoadAllHeaderLinks();
      setHeaderLinksArray(tmp);
    }
    loadData();
    //DataManager.Izpis();
    //DataManager.CreateAllBodyLinks();
  }, []);

  return (
    <section className={styles.headerLinksContainer}>
      {headerLinksArray &&
        headerLinksArray.map((each: HeaderLinkData) => (
          <HeaderLink {...each} key={each._id} />
        ))}
    </section>
  );
}
