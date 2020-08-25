import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mengjie Yuan',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Hello World',
        subTitle: 'Portfolio',
        text: 'Checkout my projects below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: "Let's talk tomorrow",
      },
    };
  }

  render() {
    return <div>Hello</div>;
  }
}

export default App;
