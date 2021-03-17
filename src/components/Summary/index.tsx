import { Income, Outcome, Total } from '../../assets';
import { useTransactions } from '../../hooks/useTransactions';
import { formatToPtBrCurrency } from '../../utils';

import * as S from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <Income />
        </header>

        <strong>{formatToPtBrCurrency(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <Outcome />
        </header>

        <strong>- {formatToPtBrCurrency(summary.withdraws)}</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Entradas</p>
          <Total />
        </header>

        <strong>{formatToPtBrCurrency(summary.total)}</strong>
      </div>
    </S.Container>
  );
}
