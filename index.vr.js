import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Model,
} from 'react-vr';

export default class solarSystem extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('sun.jpg')}
          style={{
            transform: [
              {translate:[-40,0,0]},
              {scale:[5,5,5]}
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('solarSystem', () => solarSystem);
