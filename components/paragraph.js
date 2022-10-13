import styled from '@emotion/styled'

const Paragraph = ({ pb, children }) => {

  const ParagraphStyled = styled.p`
  text-align: justify;
  text-indent: 1em;
  margin-bottom: ${(props) => props.pb};
  `
  return (
    <ParagraphStyled pb={pb}>
      {children}
    </ParagraphStyled>
  )
}

export default Paragraph
