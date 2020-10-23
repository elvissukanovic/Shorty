/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
  let newLink: BodyLinkData = {} as BodyLinkData;
  const empty: BodyLinkData[] = [];
  const [bodyLinksArray, setBodyLinksArray] = useState(empty);
  const [filterText] = useState('');

  useEffect(() => {
    async function loadData() {
      const tmp = await DataManager.LoadAllBodyLinks();
      if (tmp && tmp.length > 0) {
        tmp.sort((x, y) => x.order - y.order);
        setBodyLinksArray(tmp);
      }
    }
    loadData();
  }, []);

  const handleFilterData = () => {
    // bodyLinksArray.filter(x=>x.Name);
    // setFilterText(e.target.value);
    // console.log(filterText);
  };

  const reloadList = async () => {
    const tmp = await DataManager.LoadAllBodyLinks();
    tmp.sort((x, y) => x.order - y.order);
    setBodyLinksArray(tmp);
  };

  const handleAddNewBodyLink = () => {
    const addNewPart = document.getElementById('addNewBodyLink');
    if (addNewPart) {
      if (addNewPart.style.height !== '') {
        addNewPart.style.height = '';
      } else {
        addNewPart.style.height = '308px';
      }
    }
  };

  const handleChange = (target: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target.currentTarget;
    console.log(name, value);
    switch (name) {
      case 'name':
        newLink.name = value;
        break;
      case 'gitpath':
        newLink.gitpath = value;
        break;
      case 'vspath':
        newLink.vspath = value;
        break;
      case 'devopspath':
        newLink.devopspath = value;
        break;
      case 'navpath':
        newLink.navpath = value;
        break;
      case 'webpath':
        newLink.webpath = value;
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    newLink.type = 'body';
    DataManager.CreateBodyLink(newLink);
    newLink = {} as BodyLinkData;
    reloadList();

    // reset forme
    (document.getElementById('addNewBodyLink') as HTMLFormElement).reset();
    handleAddNewBodyLink();
  };

  return (
    <section className={styles.bodyLinksContainer}>
      <section className={styles.searchPart}>
        <input
          autoFocus
          placeholder="isci"
          onChange={handleFilterData}
          value={filterText}
        />
        <label onClick={handleAddNewBodyLink}>add new</label>
      </section>
      <form className={styles.bodyLinkEdit} id="addNewBodyLink">
        <div>
          <label>Name</label>
          <input name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Git path</label>
          <input name="gitpath" onChange={handleChange} />
        </div>
        <div>
          <label>VS path</label>
          <input name="vspath" onChange={handleChange} />
        </div>
        <div>
          <label>Devops path</label>
          <input name="devopspath" onChange={handleChange} />
        </div>
        <div>
          <label>NAV path</label>
          <input name="navpath" onChange={handleChange} />
        </div>
        <div>
          <label>WEB path</label>
          <input name="webpath" onChange={handleChange} />
        </div>
        <label onClick={handleSave}>save</label>
      </form>
      <section className={styles.linksPart}>
        {bodyLinksArray &&
          bodyLinksArray.map((each: BodyLinkData) => (
            <BodyLink {...each} key={each._id} reloadList={reloadList} />
          ))}
      </section>
    </section>
  );
}
