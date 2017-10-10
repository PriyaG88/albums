import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album_list';

const App = () => (
  <Header headerText={'Albums'}/>
);

AppRegistry.registerComponent('albums', () => App);
