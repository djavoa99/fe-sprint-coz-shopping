import styled from 'styled-components';

const Box = styled.div`
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
`;

const Section = styled.section`
  position : fixed;
  bottom : 0;
  border: solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
`

const Footer = () => (
    <Section>
        <Box>개인정보 처리방침 | 이용 약관</Box>
        <Box>All rights reserved @ Codestates</Box>
    </Section>
)

export default Footer;