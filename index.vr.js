import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Model,
  PointLight
} from 'react-vr';

const xScaler = 70;
const yScaler = 60;
export default class solarSystem extends React.Component {
  constructor () {
    super();
    this.state = {
      rotation: 0,
      thetaMercury: 30,
      thetaVenus: 50,
      thetaEarth: 70,
      thetaMars: 90,
      thetaJupiter: 110,
      thetaSaturn: 130,
      thetaUranus: 150,
      thetaNeptune: 170
    }
  }

  _rotatePlanetOnAxis() {
    this.setState({
      rotation: this.state.rotation + 1,
    });

    if (this.state.rotation > 360) {
      this.setState({
        rotation: 1,
      });
    }

    requestAnimationFrame(this._rotatePlanetOnAxis.bind(this));
  }

  _revolvePlanetAroundSun() {
    this.setState({
      thetaMercury: this.state.thetaMercury + 0.005,
      thetaVenus: this.state.thetaVenus + 0.009,
      thetaEarth: this.state.thetaEarth + 0.004,
      thetaMars: this.state.thetaMars + 0.009,
      thetaJupiter: this.state.thetaJupiter + 0.010,
      thetaSaturn: this.state.thetaSaturn + 0.002,
      thetaUranus: this.state.thetaUranus + 0.001,
      thetaNeptune: this.state.thetaNeptune + 0.012
    });

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaMercury: 1,
      });
    }

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaVenus: 1,
      });
    }

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaEarth: 1,
      });
    }

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaMars: 1,
      });
    }

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaJupiter: 1,
      });
    }

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaSaturn: 1,
      });
    }

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaUranus: 1,
      });
    }

    if (this.state.thetaMercury > 360) {
      this.setState({
        thetaNeptune: 1,
      });
    }

    requestAnimationFrame(this._revolvePlanetAroundSun.bind(this));
  }

  componentDidMount () {
    this._rotatePlanetOnAxis()
    this._revolvePlanetAroundSun()
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
              {translate:[xScaler*Math.cos(this.state.thetaMercury), 0 ,yScaler*Math.sin(this.state.thetaMercury)]},
              {scale:[0.8,0.8,0.8]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('venus.jpg')}
          lit
          style={{
            transform: [
              {translate:[xScaler*Math.cos(this.state.thetaVenus), 0 ,yScaler*Math.sin(this.state.thetaVenus)]},
              {scale:[1.1,1.1,1.1]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('earth.png')}
          lit
          style={{
            transform: [
              {translate:[xScaler*Math.cos(this.state.thetaEarth), 0 ,yScaler*Math.sin(this.state.thetaEarth)]},
              {scale:[1.4,1.4,1.4]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('mars.jpg')}
          lit
          style={{
            transform: [
              {translate:[xScaler*Math.cos(this.state.thetaMars), 0 ,yScaler*Math.sin(this.state.thetaMars)]},
              {scale:[0.9,0.9,0.9]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('jupiter.jpg')}
          lit
          style={{
            transform: [
              {translate:[xScaler*Math.cos(this.state.thetaJupiter), 0 ,yScaler*Math.sin(this.state.thetaJupiter)]},
              {scale:[4.5,4.5,4.5]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source={{obj:asset('Saturn.obj')}}
          texture={asset('saturn.jpg')}
          lit
          style={{
            transform: [
              {translate:[xScaler*Math.cos(this.state.thetaSaturn), 0 ,yScaler*Math.sin(this.state.thetaSaturn)]},
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
              {translate:[xScaler*Math.cos(this.state.thetaUranus), 0 ,yScaler*Math.sin(this.state.thetaUranus)]},
              {scale:[3.5,3.5,3.5]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source={{obj:asset('sphere.obj')}}
          texture={asset('neptune.jpg')}
          lit
          style={{
            transform: [
              {translate:[xScaler*Math.cos(this.state.thetaNeptune), 0 ,yScaler*Math.sin(this.state.thetaNeptune)]},
              {scale:[3.5,3.5,3.5]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('solarSystem', () => solarSystem);
