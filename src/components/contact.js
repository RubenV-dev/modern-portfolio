import React from 'react';
import { FiMail } from 'react-icons/fi'
import Nav from './nav'
import { AiOutlineLinkedin} from 'react-icons/ai'

export default class Icon extends React.Component {
  render() {
    return (
        <>
        <Nav/>
        <div className="contacts">
            <p>Open to discussing any work opportunities:</p>
            <p>
                <FiMail /> RubenVallejo101@gmail.com
            </p>
            <p>
                <FiMail /> r.will16@hotmail.com
            </p>
            <p>
                <a href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/"
                target="_blank"
                rel="noopener noreferrer">
                    <AiOutlineLinkedin/> https://www.linkedin.com/in/ruben-vallejo-a5317baa/
                </a>
            </p>
        </div>
        </>
    )
  } 
}