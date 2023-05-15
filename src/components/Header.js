import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from './Menu';
import { useState } from 'react';

const Logo = styled.img`
    width: 55px;
    height: 30px;
    margin-left: 51px;
    margin-right: 12px;
`;

const Section = styled.section`
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  font-size: 32px;
  font-weight: 700;
  padding: 25px;
  padding-right: 78px;
`

const Header = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <Section>
      <Logo src="https://s3-alpha-sig.figma.com/img/a646/01d8/d9897ad884e6380838afc832f8a97155?Expires=1684713600&Signature=eqV6s8pgzqLHg7nNUeBRA2TcSDPzXEbuOWyPrAWGWD5fomOBkd19hfx2tm5Be8C23Jzgn1qtiCE1LC5VDlR6OpfXx481wKjOY9z6oEm7PYTEGL5q0ymM0mQxU3VDZ6seCkB1~PKZDk8KLgjHPKmnwnTRMbA2YN~HC90fcjcEoU1gK4BgvLIWwcSyaOpWGyj9M~c0O5WtCxsUzDzq6cRRyPw4DQ5P6UY4UpPPEZQfLPAZvlqi8wTKL0CIk5kVgc7e~9UTx03nkqCV1GFMSrZQmf~egHylS8kgHr--wIZNbfgzce32M-etRkJDX2IhWOZvsG7mlbfhwTFmgGKhfGBENw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      COZ Shopping
      <FontAwesomeIcon icon={faBars} pull="right" onClick={toggleDropdown} />
      {isDropdown && <Menu />}
    </Section>
)
}
export default Header;