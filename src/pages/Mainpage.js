import styled from 'styled-components';
import Card from '../components/Card';

const List = styled.div `
    width: 1130px;
    height: 350px;
    margin: auto;
`
const Section = styled.section ` 
    display: flex;
    justify-content: center;
`
const Font = styled.div `
    font-size: 24px;
    margin-top: 50px;
    font-weight: 600;
    text-align: start;
`

const Mainpage = () => (
    <div>
        <List>
            <Font>상품 리스트</Font>
            <Section>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Section>
        </List>

        <List>
            <Font>북마크 리스트</Font>
            <Section>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Section>
        </List>
    </div>
)

export default Mainpage;