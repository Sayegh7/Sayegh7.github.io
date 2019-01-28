import React, { Component } from 'react'
import Terminal from 'terminal-in-react'

const commands = {
  contact: () => `Name: Ahmed El Sayegh
Email: ahmedelsayegh7@gmail.com
Phone: +201120006617
LinkedIn: https://www.linkedin.com/in/sayegh7/
`,
  github: () => { window.open('https://www.github.com/sayegh7', '_blank'); return 'done'},
}

const descriptions = {
  contact: 'shows a message',
  github: 'opens my github profile',
}
export default class App extends Component {
  render () {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: 'bold', fontSize: '1em' }}
          commands={commands}
          descriptions={descriptions}
          msg="Hello, I'm Ahmed El Sayegh. Welcome to my portfolio. Type help for the available options" />
      </div>
    )
  }
}
