import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './styles';

export default function Modal({ showModal, problem, handleModalClose }) {
  return (
    <Content show={showModal} onClick={handleModalClose}>
      <div>
        <h6>VISUALIZAR PROBLEMA</h6>
        <span>{`${problem && problem.description}`}</span>
      </div>
    </Content>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  problem: PropTypes.object,
  handleModalClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  problem: null,
};
