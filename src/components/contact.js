import React from 'react';
import { FiMail } from 'react-icons/fi'
import Nav from './nav'

export default class Icon extends React.Component {
  render() {
    return (
        <>
        <Nav/>
        <div className="contacts">
            <p>Feel free to reach out with any work opportunities</p>
            <p>
                <a href="mailto:RubenVallejo101@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer">
                    <FiMail /> RubenVallejo101@gmail.com
                </a>
            </p>
            <p>
                <a href="mailto:r.will16@hotmail.com" 
                target="_blank" 
                rel="noopener noreferrer">
                    <FiMail /> r.will16@hotmail.com
                </a>
            </p>
        </div>
        </>
    )
  } 
}