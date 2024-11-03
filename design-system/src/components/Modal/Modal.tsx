// src/components/Button/Button.tsx
import React from "react";
import { styled } from "styled-components";
export interface ModalProps {
  show?: boolean;
}

export const Modal = ({ show }: ModalProps) => {
  return (
    <div>
      <Title>ModalTitle</Title>
      hellomodal {show ? "보이기" : "숨기기ㅁ"}
    </div>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
