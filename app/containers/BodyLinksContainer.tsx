/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import DataManager from '../data/DataManager';
import BodyLink from '../components/BodyLink';
import { BodyLinkData } from '../data/models/BodyLinkData';
import styles from '../styles/bodyLinksContainer.css';

export default function BodyLinksContainer() {
  const empty: BodyLinkData[] = [];
  const [bodyLinksArray, setBodyLinksArray] = useState(empty);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    async function loadData() {
      const tmp = await DataManager.LoadAllBodyLinks();
      tmp.sort((x, y) => x.order - y.order);
      setBodyLinksArray(tmp);
    }
    loadData();

    // const tmp = await DataManager.LoadAllBodyLinks();
    // setBodyLinksArray(tmp);
  }, []);

  const handleFilterData = () => {
    // bodyLinksArray.filter(x=>x.Name);
    // setFilterText(e.target.value);
    console.log(filterText);
  };

  const reloadList = async () => {
    const tmp = await DataManager.LoadAllBodyLinks();
    tmp.sort((x, y) => x.order - y.order);
    setBodyLinksArray(tmp);
  };

  return (
    <section className={styles.bodyLinksContainer}>
      <section className={styles.searchPart}>
        <input
          autoFocus
          placeholder="test"
          onChange={handleFilterData}
          value={filterText}
        />
      </section>
      <section className={styles.linksPart}>
        {bodyLinksArray &&
          bodyLinksArray.map((each: BodyLinkData) => (
            <BodyLink {...each} key={each._id} reloadList={reloadList} />
          ))}
      </section>
    </section>
  );
}
