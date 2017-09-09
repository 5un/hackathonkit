import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav `
  background: orange;
  color: white;
  padding: 10px;
`;

const Section = styled.section `
  padding: 20px;
`;


export default class Page extends React.Component {

  render() {
    return (
      <div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:200,500');
          body {
            margin: 0;
            padding: 0;
            border: 0;
            font-family: Montserrat;
            font-weight: 200;
          }

          h1, h2, h3, h4, h5 {
            font-weight: 500;
          }
        `}</style>
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