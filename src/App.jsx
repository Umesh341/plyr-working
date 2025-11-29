import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './Player'
import Modal from 'react-modal';

function App() {
  const [count, setCount] = useState(0)
  const [id, setId] = useState("1FbXo7KbMKE");


  const [isOpena, setIsOpena] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpena(!isOpena);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <>

      <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="wrapper">
          <div className="player-container">
          <div>
 

       <Player a={id} />
      
      
    </div>
            
          </div>


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
                    setId('OoZu7UudGVw')
                  }}>Millikan oil drop experiment</button>
                  <button className="accordion-button" onClick={() => {
                    setId('7zcXPCt8Ck0')
                  }} >Motion of electron in magnetic field</button>
                  <button className="accordion-button" onClick={() => {
                    setId('mb1LI2wcSyU')
                  }}>Motion of electron in electric field</button>
          
                </div>
              )}


              
              
            </div>



          </div>


        </div>
      </div>
<MyModal/>
     
    </>
  )
}

export default App
const MyModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [id, setId] = useState("1FbXo7KbMKE");
  return (
    <div>
      <button onClick={openModal} className="open-modal-btn">
        Open Modal
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-header">
          <h2>Modal Content</h2>
          <Player a={id} />
          <button onClick={closeModal} className="close-modal-btn">
            &#x2715;
          </button>
        </div>
        <div className="modal-body">
          <p>This is the content of the modal.</p>
        </div>
      </Modal>
    </div>
  );
};



