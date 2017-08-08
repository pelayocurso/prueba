import React from 'react';

export default class MailField extends React.Component {
  constructor() {
    super();
    this.state = {
      text: null,
      error: null
    }
  }

  handleKeyDown(event) {
    console.log(event);
    alert('key');
  }

  render() {
    return (
      <div class="group-form">
        <input type="text" onKeyDown={(event) => this.handleKeyDown(event)}/>
        <p></p>
      </div>
    );
  }
}
