/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { shell } from 'electron';
import { HeaderLinkData } from '../data/models/HeaderLinkData';
import styles from '../styles/headerLinksContainer.css';
import AppHelper from '../AppHelper';

export default function HeaderLink(props: HeaderLinkData) {
  const handleIconClick = () => {
    // Open a local file in the default app
    shell.openItem(props.path);
    AppHelper.minimizeAppWindow();
  };

  return (
    <div
      className={styles.headerLink}
      onClick={handleIconClick}
      title={props.name}
    >
      <span className="icon-body icon-folder" />
      <label>{props.name}</label>
    </div>
  );
}
