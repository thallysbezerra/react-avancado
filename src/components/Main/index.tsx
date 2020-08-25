import * as S from './styles'

const Main = ({
  title = 'React Avançado!',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      alt="Imagem de um átomo e React Avançado escrito ao lado."
      src="/img/logo.svg"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      alt="Um desenvolvedor de frente para uma tela com código."
      src="/img/hero-illustration.svg"
    />
  </S.Wrapper>
)

export default Main
