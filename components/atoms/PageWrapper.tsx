import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  /* width: 100%; */
  margin: 1.5rem;
  padding: 1.5rem;
  border: 1px solid lightgray;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  background-color: white;

  @media (max-width: 500px) {
    padding: 5px;
    margin: 5px;
  }
`;
