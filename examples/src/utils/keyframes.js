import { keyframes } from "styled-components";

export const pulse = keyframes`
  from {
    transform: scale(1);
  }

  to{
    transform: scale(1.5);
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
