import { useState } from 'react';
import Modal from 'react-modal';

import { Close, Income, Outcome } from '../../assets';

import * as S from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState<'desposit' | 'withdraw'>('desposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <Close />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => setType('desposit')}
            isActive={type === 'desposit'}
            activeColor="green"
          >
            <Income />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <Outcome />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input type="number" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
