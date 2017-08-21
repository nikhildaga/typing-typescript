import * as React from "react";

export interface HelloProps { name : string;}

export const Hello = (props: HelloProps) => <h1>Hello from {props.name}!</h1>;