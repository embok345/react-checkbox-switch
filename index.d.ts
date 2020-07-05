import React from 'react';

export = Switch;

declare namespace Switch {
  type CheckBoxType = 'box' | 'switch';
  type Direction = 'left' | 'right';
  type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
      /** Set the state of the checkbox */
      setChecked?: (checked: boolean) => void;
      /** Label of the checkbox */
      label?: string;
      /** Visual type of the checkbox. Default 'box' */
      type?: CheckBoxType;
      /** Whether the switch is to the left or the right of the label */
      direction?: Direction;
  };
  type CheckBoxState = {
      checked: boolean;
  };
  /**
   * Stylised checkbox, with various styles available, abiding by WAI-ARIA requirements
   */
  export class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {
      state: {
          checked: boolean;
      };
      componentDidMount(): void;
      componentDidUpdate(): void;
      setChecked(checked: boolean): void;
      render(): JSX.Element;
  }
}