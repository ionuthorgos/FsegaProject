import React, {PropTypes} from 'react';
import './App.css';
import Header from "./common/Header";
/*import Particles from 'react-particles-js';*/


const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};


class App extends  React.Component {
  render(){
    return(



          <div>
            <Header/>
            {this.props.children}
        {/*    <Particles
              params={particleOpt} />*/}
          </div>




    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
