import React from 'react'
import Contact from '../MainPage/contact';
import Email from '../MainPage/email';
import Introduction from './introduction'
import Projects from './projects'

export default function Gamedev() {
  return (
    <div>
      <Introduction />
      <Projects />
      <Contact/>
      <Email/>
    </div>
  );
}
