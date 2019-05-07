# pravatar

> Avatar Placeholder

[![NPM](https://img.shields.io/npm/v/pravatar.svg)](https://www.npmjs.com/package/pravatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pravatar

# besides React, react-avatar also has prop-types as peer dependency,
# make sure to install it into your project
$ npm install prop-types --save
```

## Usage

```jsx
import React, { Component } from "react";

import Pravatar from "pravatar";

class Example extends Component {
  render() {
    return (
      <Pravatar
        text=""
        image="https://avatars1.githubusercontent.com/u/17858766?s=88&v=4"
        width="100px"
        height="100px"
        radius="100px"
        fontSize="50px"
        bg="#e7e7e7"
        textColor="#000"
        border="1px solid black"
      />
    );
  }
}
```

##Notes

```
** Either you can place image or text not both
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
