import * as S from './styles';

export function TransactionTable() {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desevnvolvimento de website</td>
            <td className="deposit">R$12000,00</td>
            <td>Desevnvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desevnvolvimento de website</td>
            <td className="withdraw">R$12000,00</td>
            <td>Desevnvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
