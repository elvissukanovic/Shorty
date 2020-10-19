/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
      let tmp = await DataManager.LoadAllHeaderLinks();
      if (tmp && tmp.length > 0) {
        setHeaderLinksArray(tmp);
      } else {
        tmp = await DataManager.CreateAllHeaderLinks();
        setHeaderLinksArray(tmp);
      }
    }
    loadData();
  }, []);

  const handleEdit = () => {
    const editPart = document.getElementById('headerLinksEdit');
    if (editPart) {
      if (editPart.style.maxHeight !== '') {
        editPart.style.maxHeight = '';
      } else {
        editPart.style.maxHeight = '300px';
      }
    }
  };

  const handleSave = () => {
    DataManager.UpdateHeaderLinks(headerLinksArray);
    handleEdit();
  };

  const handleChange = (target: any) => {
    const { name, value } = target.currentTarget;
    const edited = headerLinksArray.map((each) => {
      if (name === each.name) each.path = value;
      return each;
    });
    // tmpLink = headerLinksArray.find((x) => x.name === name);
    // console.log(headerLinksArray);
    setHeaderLinksArray(edited);

    // eslint-disable-next-line no-debugger
    /*
    if (tmpLink) {
      tmpLink.path = value;
      ooo[0] = tmpLink;
    }
    */
    // console.log(ooo);
    // console.log(headerLinksArray);
    // setHeaderLinksArray(ooo);
  };

  return (
    <section className={styles.headerLinksContainer}>
      <div className={styles.headerLinksActions}>
        <label onClick={handleEdit}>edit</label>
      </div>
      <section className={styles.headerLinksWrapper}>
        {headerLinksArray &&
          headerLinksArray.map((each: HeaderLinkData) => (
            <HeaderLink {...each} key={each._id} />
          ))}
      </section>
      <div className={styles.headerLinkEdit} id="headerLinksEdit">
        {headerLinksArray &&
          headerLinksArray.map((each: HeaderLinkData) => (
            <div key={each._id}>
              <label>{each.name}</label>
              <input
                name={each.name}
                value={each.path}
                onChange={handleChange}
              />
            </div>
          ))}
        <label onClick={handleSave}>save</label>
      </div>
    </section>
  );
}
