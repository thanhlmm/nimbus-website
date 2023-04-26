// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

// An existing React component
export function Greetings() {
  return <div>Hello from React</div>;
}

// Qwik component wrapping the React component
export const QGreetings = qwikify$(Greetings);
