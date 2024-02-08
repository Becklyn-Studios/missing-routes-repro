import React, { PropsWithChildren } from "react";

export type InputCol = 1 | 2 | 3 | 4 | 5 | 6;

export interface InputWrapperProps {
    col?: InputCol;
}

export const InputWrapper: React.FC<PropsWithChildren<InputWrapperProps>> = ({ col, children }) =>
    col ? <div className={`col-${col}`}>{children}</div> : children;
