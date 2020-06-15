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
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('mercury.jpg')}
          style={{
            transform: [
              {translate:[-20,0,-50]},
              {scale:[0.8,0.8,0.8]}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('venus.jpg')}
          style={{
            transform: [
              {translate:[-20,20,-50]},
              {scale:[1.1,1.1,1.1]}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('earth.png')}
          style={{
            transform: [
              {translate:[0,0,-50]},
              {scale:[1.4,1.4,1.4]}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('mars.jpg')}
          style={{
            transform: [
              {translate:[20,0,-50]},
              {scale:[0.9,0.9,0.9]}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('jupiter.jpg')}
          style={{
            transform: [
              {translate:[50,0,-50]},
              {scale:[4.5,4.5,4.5]}
            ]
          }}
        />
        <Model
          source={{obj:asset('Saturn.obj')}}
          texture={asset('saturn.jpg')}
          style={{
            transform: [
              {translate:[100,0,-50]},
              {scale:[3.5,3.5,3.5]}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('uranus.jpg')}
          style={{
            transform: [
              {translate:[100,0,-50]},
              {scale:[3.5,3.5,3.5]}
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('solarSystem', () => solarSystem);
