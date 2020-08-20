import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      alt="Imagem de um átomo e React Avançado escrito ao lado."
      src="/img/logo.svg"
    />
    <S.Title>React Avançado!</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      alt="Um desenvolvedor de frente para uma tela com código."
      src="/img/hero-illustration.svg"
    />
  </S.Wrapper>
)

export default Main
