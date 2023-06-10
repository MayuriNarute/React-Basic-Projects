import React,{useState} from 'react';

const Modal = ({isWinner, show, hideModal,handleReset }) => (
    <div
      className={`modal ${show ? ' modal-show' : ''}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-5">Congratulations!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={handleReset} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Player {isWinner} won the game.🏆
            
          </div>
          <div className="modal-footer">
            
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={handleReset}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
 
    

export default Modal;