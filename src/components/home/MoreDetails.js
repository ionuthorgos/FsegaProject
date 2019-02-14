import React from 'react';
import { Image } from 'react-native';


class MoreDetails extends  React.Component {
  render(){
    return(
      <div className="jumbotron">

          <Image
            source={require('/react-native/img/favicon.png')}
          />

        <h1>About</h1>
        <p>This application uses React</p>
      </div>
    );
  }
}

export default MoreDetails;
