var React = require('react')

var shouldPureComponentUpdate = require('react-pure-render/function')

function Wrapper(Component) {
  return React.createClass({
    shouldComponentUpdate: shouldPureComponentUpdate,
    render: function() {
      return Component(this.props)
    }
  })
}

module.exports = Wrapper
