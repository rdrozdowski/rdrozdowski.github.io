import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/websites.jpg';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      usernameInp: '',
      userEmailInp: '',
      userDescInp: ''
    };

    this.submitForm = this.submitForm.bind(this);
    this.onchange = this.onchange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  onchange(evt) {
    this.setState({
      usernameInp: evt.target.value
    })
  }

   checkEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  submitForm(evt) {
    let uname = document.getElementById('usernameInp').value,
      uemail = document.getElementById('userEmailInp').value,
      udesc = document.getElementById('userDescInp').value;
      var emailCheck = this.checkEmail(uemail);
      return false;
  }

  render() {
    return (
      <section>
        <h4 dangerouslySetInnerHTML={{ __html: JsonMenu[3].menuTitle }}></h4>
        <p>
          If you have enquiries or would just like to contact me, please use the details below or fill out the form.</p>
        <form id="contact-form" action="https://formspree.io/raf.drozdowski@gmail.com" method="POST" onSubmit={this.submitForm}>
          <div id="labels" className={'float-left'}>
            <label htmlFor="usernameInp" className={'display-block'} name="Name">Name</label>
            <label htmlFor="userEmailInp" className={'display-block'}  name="Email">E-mail</label>
            <label htmlFor="userDescInp" className={'display-block'} name="Message">Message</label>
          </div>
          <div id="inputs">
            <input id="usernameInp" name="usernameInp" type="text" onBlur={this.checkEmail()} placeholder="eg. John" />
            <input id="userEmailInp" name="userEmailInp" type="text" placeholder="eg. john@server.com" />
            <textarea id="userDescInp" name="userDescInp" placeholder="message content"></textarea>
            <input id="submit" name="submit" type="submit" className={'clear-both'} value="Send" />
          </div>
        </form>
      </section>
    )
  }
}