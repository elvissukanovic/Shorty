/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { shell } from 'electron';
import { BodyLinkData } from '../data/models/BodyLinkData';
import styles from '../styles/bodyLinksContainer.css';
import AppHelper from '../AppHelper';
import DataManager from '../data/DataManager';

const { exec } = require('child_process');

export default function BodyLink(props: BodyLinkData) {
  const [bodyLink, setBodyLink] = useState(props);

  const handleIconClick = (path: string) => {
    if (path) {
      if (path.includes('finsql.exe')) {
        exec(path);
      } else {
        shell.openItem(path);
      }
      AppHelper.minimizeAppWindow();
    }
  };

  const handleMoveUp = () => {
    DataManager.MoveUpBodyLink(bodyLink);
    props.reloadList();
  };

  const handleEdit = () => {
    const editPart = document.getElementById(`bodyLinkEdit${bodyLink._id}`);
    if (editPart) {
      if (editPart.style.height !== '') {
        editPart.style.height = '';
      } else {
        editPart.style.height = '300px';
      }
    }
  };

  const handleDelete = () => {
    DataManager.DeleteBodyLink(bodyLink._id);
    props.reloadList();
  };

  const handleSave = () => {
    DataManager.UpdateBodyLink(bodyLink);
    handleEdit();
  };

  const handleChange = (target: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target.currentTarget;

    switch (name) {
      case 'gitpath':
        setBodyLink((old) => ({ ...old, gitpath: value }));
        break;
      case 'vspath':
        setBodyLink((old) => ({ ...old, vspath: value }));
        break;
      case 'devopspath':
        setBodyLink((old) => ({ ...old, devopspath: value }));
        break;
      case 'navpath':
        setBodyLink((old) => ({ ...old, navpath: value }));
        break;
      case 'webpath':
        setBodyLink((old) => ({ ...old, webpath: value }));
        break;
      default:
        break;
    }
  };

  return (
    <section className={styles.bodyLink}>
      <label className={styles.bodyLinkTitle}>{bodyLink.name}</label>

      <label className={styles.bodyLinkDelete} onClick={handleDelete}>
        delete
      </label>
      <div className={styles.bodyLinkActions}>
        <label onClick={handleEdit}>edit</label>
        <label onClick={handleMoveUp}>move up</label>
      </div>
      <br />
      <div className={styles.bodyLinkLinksWrapper}>
        <div
          onClick={() => handleIconClick(bodyLink.gitpath)}
          title={bodyLink.gitpath}
        >
          <span className="icon-body icon-folder" />
          <label>GIT</label>
        </div>
        <div
          onClick={() => handleIconClick(bodyLink.vspath)}
          title={bodyLink.vspath}
        >
          <span className="icon-body icon-vs" />
          <label>vspath</label>
        </div>
        <div
          onClick={() => handleIconClick(bodyLink.devopspath)}
          title={bodyLink.devopspath}
        >
          <span className="icon-body icon-www" />
          <label>devopspath</label>
        </div>
        <div
          onClick={() => handleIconClick(bodyLink.navpath)}
          title={bodyLink.navpath}
        >
          <span className="icon-body icon-nav" />
          <label>navpath</label>
        </div>
        <div
          onClick={() => handleIconClick(bodyLink.webpath)}
          title={bodyLink.webpath}
        >
          <span className="icon-body icon-www" />
          <label>webpath</label>
        </div>
      </div>
      <div className={styles.bodyLinkEdit} id={`bodyLinkEdit${bodyLink._id}`}>
        <div>
          <label>Git path</label>
          <input
            value={bodyLink.gitpath}
            name="gitpath"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>VS path</label>
          <input
            value={bodyLink.vspath}
            name="vspath"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Devops path</label>
          <input
            value={bodyLink.devopspath}
            name="devopspath"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>NAV path</label>
          <input
            value={bodyLink.navpath}
            name="navpath"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>WEB path</label>
          <input
            value={bodyLink.webpath}
            name="webpath"
            onChange={handleChange}
          />
        </div>
        <label onClick={handleSave}>save</label>
      </div>
    </section>
  );
}
