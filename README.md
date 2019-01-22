# styled-devices

> A styled-components version of some of the most popular devices out there

![](https://img.shields.io/npm/v/styled-devices.svg)

![](https://img.shields.io/npm/dw/styled-devices.svg)

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Example

```javascript
import React, { Component } from "react";

import { IphoneX } from "../../src";

class App extends Component {
  render() {
    return (
      <div>
        <IphoneX
          background={["https://bit.ly/2T8fDWo"]}
          sizes={[0.9, 0.8, 0.5]}
          delay={10000}
          landscape
        />
      </div>
    );
  }
}

export default App;
```

---

## Installation

```shell
$ npm i styled-devices
```

---

## Usage

- Import it!
- Grab your device!
- Pass the props you need!

---

## Contributing

> To get started...

### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://github.com/vinicius-gr/styled-devices`

### Step 2

- **Build your device, following the same pattern of code** 🔨🔨🔨
- **Test it** 💡💡💡

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/joanaz/HireDot2/compare/" target="_blank">`https://github.com/vinicius-gr/styled-devices/compare`</a>.

---

## License

![License](https://img.shields.io/github/license/vinicius-gr/styled-devices.svg)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
