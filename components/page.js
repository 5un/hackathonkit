import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import globalCss from '../css/global.css.js'

const Nav = styled.nav `
  background: orange;
  color: white;
  padding: 10px 100px;
`;

const Section = styled.section `
  padding: 20px;
`;

export default class Page extends React.Component {

  render() {
    return (
      <div>
        <style jsx global>{globalCss}</style>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <Nav>
          <h1>HackathonKit</h1>
        </Nav>
        <Section>
          {this.props.children}
        </Section>
        
      </div>
    );
  }

}