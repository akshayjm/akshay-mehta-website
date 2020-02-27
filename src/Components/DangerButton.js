import React, { Component } from './node_modules/react';
import Button from './Button'; // Import a component from another file
class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}
export default DangerButton;