import { Logo } from '../../assets';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <button type="button">Nova transação</button>
      </S.Content>
    </S.Container>
  );
}
