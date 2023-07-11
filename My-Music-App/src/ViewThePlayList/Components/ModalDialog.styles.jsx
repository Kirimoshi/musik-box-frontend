import styled from 'styled-components';

export const ModalContainer = styled.dialog`
  &[open] {
    position: absolute;
    top: 0;
    left: 50%;
    /* z-index: 01; */
    transform: translate(-50%, -50%);
    /* Layout */
    max-width: 312px;
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    /* Style */
    border: none;
    border-radius: 4px;
    background: #211f26;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h3`
  /* Layout */
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: center;
  /* Style */
  color: var(--m-3-white, #fff);
  text-align: center;

  /* M3/body/medium */
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const Divider = styled.hr`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 248px;
  height: 1px;
  background: #49454f;
  border: none;
`;
const BaseButton = styled.button`
  /* Layout */
  width: 224px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;

  /* Style */
  border-radius: 100px;
  border: 1px solid var(--m-3-sys-dark-outline, #938f99);

  /* Text */
  color: var(--m-3-sys-dark-error, #f2b8b5);
  text-align: center;

  /* M3/label/large */
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;

  line-height: 20px;
  letter-spacing: 0.1px;
`;
export const ActionButton = styled(BaseButton)`
  background-color: transparent;
  color: var(--m-3-sys-dark-error, #f2b8b5);
  font-weight: 500;
`;

export const CancelButton = styled(BaseButton)`
  background: var(--m-3-sys-dark-error, #f2b8b5);
  color: var(--m-3-sys-dark-error-container, #8c1d18);
  font-weight: 700;
`;
// }
// .modal__btn--cancel {

// }
