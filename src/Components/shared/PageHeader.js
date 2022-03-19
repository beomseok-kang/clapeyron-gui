import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #aaa;
`;

const EmojiButton = styled(Link)`
  font-size: 2rem;
  color: #000;
  text-decoration: none;
`;

const H2 = styled.h2`
  font-size: 1.5rem;

`;

function PageHeader({ title }) {
  const history = useHistory();
  return (
    <Header>
      <EmojiButton onClick={() => history.goBack()}>{"<"}</EmojiButton>
      <H2>{title}</H2>
      <EmojiButton to="/">X</EmojiButton>
    </Header>
  );
}

export default PageHeader;
