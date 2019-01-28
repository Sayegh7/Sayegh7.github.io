import React, { Component } from 'react'
import Terminal from 'terminal-in-react'

const commands = {
  contact: () => `Name: Ahmed El Sayegh
Email: ahmedelsayegh7@gmail.com
Phone: +201120006617
LinkedIn: https://www.linkedin.com/in/sayegh7/
`,
  github: () => { window.open('https://www.github.com/sayegh7', '_blank'); return 'done'},
  linkedin: () => { window.open('https://www.linkedin.com/in/sayegh7/', '_blank'); return 'done'},
  work: () => 'Work In Progress',
  projects: () => 'Work In Progress',
  opensource: () => 'Work In Progress',
}

const descriptions = {
  contact: 'show contact info',
  github: 'opens my github profile',
  linkedin: 'opens my linkedin profile',
  work: 'shows my work experience',
  projects: 'shows my projects',
  opensource: 'shows my open source contributions',
}
export default class App extends Component {
  render () {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Terminal
          color='green'
          startState='maximised'
          allowTabs={false}
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
