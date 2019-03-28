import React from 'react';
import "./Input.css";
import { AST_PropAccess } from 'terser';

export const Input = (props) => (
    <div className="input">{props.input}</div>
);