/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { tsx } from "esri/widgets/support/widget";

interface AuthStatusProps {
  icon: JSX.Element;
  text: string;
  showIcon: boolean;
  showLabel: boolean;
  style: string;
}

/**
 * These are simple stateless components used
 * with the Authentication Widget.
 */
export const AuthStatus = ({
  style,
  icon,
  text,
  showLabel,
  showIcon
}: AuthStatusProps) => {
  const dynamicStyles = {
    [style]: showIcon
  };
  return !showLabel && showIcon ? (
    <span aria-label={text}>{icon}</span>
  ) : (
    <span>
      {showIcon ? <span aria-label={text}>{icon}</span> : <span />}
      <span classes={dynamicStyles}>{text}</span>
    </span>
  );
};

/**
 * Returns the SignIn SVG Icon
 */
export const SignIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    class="svg-icon"
  >
    <path d="M32 0v32H12V18h4v10h12V4H16v8h-4V0h20zM7.357 19.126L4.115 16H24v-2H4.115l3.242-3.126L6.483 10 1.48 15l5.003 5 .874-.874z" />
  </svg>
);

/**
 * Returns the SignOut SVG Icon
 */
export const SignOut = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    class="svg-icon"
  >
    <path d="M16.005 15.871a5.872 5.872 0 0 0 0-11.742 5.87 5.87 0 1 0 0 11.742zm11.567 7.188C27.27 19.036 20.023 18 16 18c-4.012 0-11.271 1.039-11.573 5.059C4.203 26.11 4.068 28.18 4.02 30h23.96c-.047-1.82-.184-3.891-.407-6.941z" />
  </svg>
);

/**
 * Returns the label for a User if provided
 * @param name
 */
export const User: (name?: string | undefined) => JSX.Element = name => (
  <span>{name ? `(${name})` : ""}</span>
);
