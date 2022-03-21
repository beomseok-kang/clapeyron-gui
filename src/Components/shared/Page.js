import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;

  background-color: aqua;

  ${props => props.centered
    ? "display: flex; justify-content: center; align-items: center;"
    : ""
  }
`;

const UiWrapper = styled.div`
  height: 100%;
`;


function Page({ children, centered = false }) {
  return (
    <Section centered={centered}>
      <UiWrapper>
        {children}
      </UiWrapper>
    </Section>
  );
}

export default Page;