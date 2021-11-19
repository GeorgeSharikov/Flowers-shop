import styled from "styled-components";

export const FooterWrapper = styled.div`
grid-area: footer;
background-color: #272829;
color: white;
`

export const FooterBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: space-between;
  padding: 30px;
`

export const FooterColumn = styled.div`
  text-align: center;
`