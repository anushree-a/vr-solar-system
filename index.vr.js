import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class solarSystem extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('solarSystem', () => solarSystem);
