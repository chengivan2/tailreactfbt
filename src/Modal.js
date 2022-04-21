import React from 'react';
import './index.css';

// Please append this element right before the closing body tag </body>. Still working on the design
function Modal() {
    return (
        <React.Fragment>
            <div className="w-full h-full">
  <div id="modal-bg" className="w-full h-full bg-[#848A97] top-0 absolute hidden"></div>
  <div id="modal-box" className="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden">
    
  </div>
</div>
 
        </React.Fragment>
    );
}

// The following script will facilitate the opening of the pop up

constmodalbg = document.getElementById('modal-bg');
const modalSwitch = document.getElementById('modal-switch');
const modalBox = document.getElementById('modal-box');
const modalClose = document.getElementById('modal-close');
modalbg.addEventListener("click", function() {
    modalBox.classList.add('hidden')
    modalbg.classList.add('hidden')
  });
  modalSwitch.addEventListener("click", function() {
    modalBox.classList.remove('hidden')
    modalbg.classList.remove('hidden')
  });
  modalClose.addEventListener("click", function() {
    modalBox.classList.remove('hidden')
    modalbg.classList.remove('hidden')
  });

export default Modal;