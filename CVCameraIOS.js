
import React from 'react';
import { requireNativeComponent } from 'react-native';

class CVCameraIOS extends React.Component {
  render() {
    return <CVCamera/>;
  }
}

CVCameraIOS.propTypes = {
  
  reactTag: React.PropTypes.number
};
var CVCamera = requireNativeComponent('CVCamera', CVCameraIOS);
      
module.exports = CVCameraIOS;