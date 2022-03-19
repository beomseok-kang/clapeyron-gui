import { Link } from "react-router-dom";
import styled from "styled-components";

import { buttonStyle } from "./Button";

const LinkButton = styled(Link)`
  ${buttonStyle}
  
  color: #000;
  text-decoration: none;
`;

export default LinkButton;