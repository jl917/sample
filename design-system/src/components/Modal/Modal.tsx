// src/components/Button/Button.tsx
import React from "react";

export interface ModalProps {
  show?: boolean;
}

export const Modal = ({ show }: ModalProps) => {
  return <div>hellomodal {show ? "보이기" : "숨기기ㅁ"}</div>;
};
