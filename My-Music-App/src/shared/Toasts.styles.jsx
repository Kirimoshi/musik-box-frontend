import styled from "styled-components";

export const ToatsMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    color: var(--m-3-white, #fff);
    text-align: center;
    /* M3/body/large */
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
  }
`;
