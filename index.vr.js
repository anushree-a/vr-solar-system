import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Model,
  PointLight
} from 'react-vr';

export default class solarSystem extends React.Component {
  constructor () {
    super();
    this.state = {
      rotation: 0
    }
  }

  _rotateSun() {
    this.setState({
      rotation: this.state.rotation + 1,
    });

    if (this.state.rotation > 360) {
      this.setState({
        rotation: 1,
      });
    }

    requestAnimationFrame(this._rotateSun.bind(this));
  }

  componentDidMount () {
    this._rotateSun()
  }

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <PointLight intensity={1} style={{color:'white', transform:[{translate: [0,0,0]}]}} />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('sun.jpg')}
          style={{
            transform: [
              {translate:[-40,0,0]},
              {scale:[5,5,5]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('mercury.jpg')}
          lit
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
          lit
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
          lit
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
          lit
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
          lit
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
          lit
          style={{
            transform: [
              {translate:[100,0,-50]},
              {scale:[3.5,3.5,3.5]},
              {rotateX:-20},
              {rotateY:20},
              {rotateX:-20},
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('uranus.jpg')}
          lit
          style={{
            transform: [
              {translate:[100,0,-50]},
              {scale:[3.5,3.5,3.5]}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('neptune.jpg')}
          lit
          style={{
            transform: [
              {translate:[120,0,-50]},
              {scale:[3.5,3.5,3.5]}
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('solarSystem', () => solarSystem);
