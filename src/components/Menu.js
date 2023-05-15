import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	text-decoration: none; /* 링크의 밑줄 제거 */
    color: inherit; /* 링크의 색상 제거 */
`;

const Dropdown = styled.ul`
    position: absolute;
    width: 200px;
    height: 150px;
    border-radius: 12px;
    padding: 5px;
    list-style: none;
    background: grey;
    top: 50px;
    right: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
        content: '';
        position: absolute;
        margin-left: -25px;
        margin-top: -20px;
        left: 75%;
        border: 18px solid transparent;
        border-bottom-color: grey;
        border-top: 0;
    }
`

const List = styled.li`
    padding: 14px;
    font-size: 16px;
    font-weight: 400;
`

const Menu = () => (
    <Dropdown>
        <List>
            유영준님, 안녕하세요!
        </List>
        <List>
            <StyledLink to="/products/list">상품리스트 페이지</StyledLink>
        </List>
        <List>
            <StyledLink to="/bookmark">북마크 페이지</StyledLink>
        </List>
    </Dropdown>
)

export default Menu;