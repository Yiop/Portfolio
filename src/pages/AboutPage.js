import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>i dont know</p>
      </Content>
    </div>
  );
}

export default AboutPage;
