import React,{useState} from 'react'
import './App.css'
import Player from './Player'
function Accordion() {

    const [count, setCount] = useState(0)
    const [id, setId] = useState("1FbXo7KbMKE");
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  
    const [isOpena, setIsOpena] = useState(false);
  
    const toggleAccordion1 = (event) => {
      event.preventDefault();
      setIsOpena(!isOpena);
    };
  
  
  
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode', !isDarkMode);
    };
  
  
  return (
    <div className="change-video">

            <button className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <div className="accordion-container">



              <button className="toggle-button" onClick={toggleAccordion1}>
                Electron
              </button>
              {isOpena && (
                <div className="accordion-content">
                  <button className="accordion-button" onClick={() => {
                    setId('7zcXPCt8Ck0')
                  }}>Millikan oil drop experiment</button>
                  <button className="accordion-button" onClick={() => {
                    setId('7zcXPCt8Ck0')
                  }} >Motion of electron in magnetic field</button>
                  <button className="accordion-button" onClick={() => {
                    setId('7zcXPCt8Ck0')
                  }}>Motion of electron in electric field</button>
                  <button className="sub-toggle-button" onClick={toggleAccordion}>
                Toggle Accordion
              </button>
              {isOpen && (
                <div className="sub-accordion-content">
                  <button className="sub-accordion-button" onClick={() => {
                    setId('7zcXPCt8Ck0')
                  }}>Button 1</button>
                  <button className="sub-accordion-button">Button 2</button>
                  <button className="sub-accordion-button">Button 3</button>
                </div>
              )}
                </div>
              )}


              
              
            </div>



          </div>

  )
}

export default Accordion