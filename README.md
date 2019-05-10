# Pravatar

> Avatar Placeholder

[![NPM](https://img.shields.io/npm/v/pravatar.svg)](https://www.npmjs.com/package/pravatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![React pravatar component preview](eg.png)

For the moment we support following types:

- Any String
- Custom image
- Name initials

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
        position="center"
        size="cover"
        weight="bold"
      />
    );
  }
}
```

## Options

### Avatar

| Attribute   | Options   | Default   | Description                                                                 |
| ----------- | --------- | --------- | --------------------------------------------------------------------------- |
| `text`      | _string_  | `empty`   | Any String                                                                  |
| `image`     | _string_  | `empty`   | Image avatar to use                                                         |
| `textColor` | _string_  | `inherit` | set the color of text                                                       |
| `size`      | _string_  | `cover`   | set the background image size                                               |
| `position`  | _string_  | `center`  | set the background image position                                           |
| `weight`    | _string_  | `normal`  | set the font weight                                                         |
| `fontSize`  | _string_  | `inherit` | set the font size                                                           |
| `border`    | _string_  | `none`    | set the border of the avatar                                                |
| `radius`    | _string_  | `100px`   | set the border radius of the avatar                                         |
| `height`    | _string_  | `50px`    | set the height of the avatar                                                |
| `width`     | _string_  | `50px`    | set the width of the avatar                                                 |
| `bg`        | _string_  | `inherit` | To set the background color of the avatar                                   |
| `initial`   | _boolean_ | false     | Will be used to generate avatar based on the initials of the person or text |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
