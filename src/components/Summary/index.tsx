import { useContext } from 'react';

import { Income, Outcome, Total } from '../../assets';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import * as S from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <Income />
        </header>

        <strong>R$100,00</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <Outcome />
        </header>

        <strong>R$100,00</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Entradas</p>
          <Total />
        </header>

        <strong>R$100,00</strong>
      </div>
    </S.Container>
  );
}
