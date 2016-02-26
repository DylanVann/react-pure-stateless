# react-pure-stateless

HoC to make your React stateless component real pure.

This is a simple general helper to get around stateless components not being strictly speaking pure;
Given the same props, it still renders everytime.

See facebook/react#5677

This high order component leverages the [react-pure-render](http://github.com/gaearon/react-pure-render) module to wrap
your stateless component into a class component with pure shouldComponentUpdate behavior.

# Installation

Install via npm, note that you will also need to install [react-pure-render](http://github.com/gaearon/react-pure-render).

```bash
npm install --save react-pure-stateless
```

# Usage

```javascript
var pureStateless = require('react-pure-stateless')

let MyPureComponent = pureStateless((props) => {
    return (...INSERT JSX HERE...)
})
```

NB: You should probably think twice before using this for every stateless component =)

# License

MIT
