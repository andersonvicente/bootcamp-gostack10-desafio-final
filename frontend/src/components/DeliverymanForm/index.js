import React from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Back, Button } from '~/styles/form';
import history from '~/services/history';

import {
  createRequest,
  updateRequest,
} from '~/store/modules/deliveryman/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function DeliverymanForm({ data }) {
  const deliveryman = data
    ? data.deliveryman
    : { id: null, avatar_id: null, name: '', email: '' };

  const dispatch = useDispatch();

  function HandleNavigateBack() {
    history.goBack();
  }

  function HandleSubmit({ avatar_id, name, email }) {
    if (deliveryman.id) {
      dispatch(
        updateRequest({
          id: deliveryman.id,
          avatar_id,
          name,
          email,
        })
      );
    } else {
      dispatch(
        createRequest({
          avatar_id,
          name,
          email,
        })
      );
    }
  }

  return (
    <Container>
      <Form initialData={deliveryman} onSubmit={HandleSubmit}>
        <div>
          <header>
            <h2>
              {deliveryman.id
                ? 'Edição de entregadores'
                : 'Cadastro de entregadores'}
            </h2>
            <div>
              <Back type="button" onClick={HandleNavigateBack}>
                <MdChevronLeft size={28} />
                VOLTAR
              </Back>
              <Button type="submit">
                <MdCheck size={28} />
                SALVAR
              </Button>
            </div>
          </header>
          <div>
            <AvatarInput name="avatar_id" />
            <p>
              Nome
              <Input name="name" placeholder="Nome completo" />
            </p>
            <p>
              Email
              <Input name="email" placeholder="Endereço de e-mail" />
            </p>
          </div>
        </div>
      </Form>
    </Container>
  );
}

DeliverymanForm.propTypes = {
  data: PropTypes.object,
};

DeliverymanForm.defaultProps = {
  data: null,
};
