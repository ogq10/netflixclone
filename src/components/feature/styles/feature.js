import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  margin: auto;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 34px;
  }
`;
export const SubTitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 26px;
  margin: 16px auto;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
