import React, { Component } from "react";

import { AppleWatch, IphoneX, IpadPro, MacbookPro } from "../../src";

class App extends Component {
  render() {
    let wpp1 = "https://i.imgur.com/7sy5OIT.jpg";
    let wpp2 = "https://i.imgur.com/uIN6Wxe.jpg";

    return (
      <div>
        <AppleWatch
          backgrounds={[wpp1, wpp2]}
          sizes={[1.0, 0.9, 0.8, 0.5]}
          delay={5000}
        />
      </div>
    );
  }
}

export default App;
