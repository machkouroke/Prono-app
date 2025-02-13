import { css } from '@emotion/react';

export const combinedCouponStyle = css`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 90%;
    background: linear-gradient(to bottom, #805ad5 0%, #6b46c1 100%);
    border-radius: 2px;
  }
`;