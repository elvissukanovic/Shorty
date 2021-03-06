/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import HeaderLinksContainer from './HeaderLinksContainer';
import BodyLinksContainer from './bodyLinksContainer';
import DataManager from '../data/DataManager';

export default function HomePage() {
  DataManager.ResetData();

  return (
    <div>
      <HeaderLinksContainer />
      <BodyLinksContainer />
    </div>
  );
}
