import React, { Component } from "react";

import { AppleWatch, IphoneX, IpadPro, MacbookPro } from "../../src";

class App extends Component {
  render() {
    let wpp1 =
      "https://raw.githubusercontent.com/vinicius-gr/styled-devices/master/examples/public/assests/IphoenX.jpg";
    let wpp2 = "https://i.redd.it/x6c414rw3mg01.jpg";

    return (
      <div>
        <AppleWatch
          backgrounds={[wpp1, wpp2]}
          sizes={[0.9, 0.8, 0.5]}
          delay={10000}
        />
      </div>
    );
  }
}

export default App;
