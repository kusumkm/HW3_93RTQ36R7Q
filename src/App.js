import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import Text from './components/text.js';
import Search from './components/search.js';
import ImageCards from './components/imageCards.js';

import './css/layout.css';
import './css/global.css';
import './css/components.css';
import './css/sample-wallpaper.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <div className="container">
            
              <div>
                  <Navbar />
              </div>

              <div>
                <Text />
              </div>

              <div>  
                <Search />
              </div>

              <div>
                <ImageCards />
              </div>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
