import React from 'react';

// @ts-ignore
import styles from './CheckBox.scss';

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
}

type CheckBoxState = {
  checked: boolean;
}

/**
 * Stylised checkbox, with various styles available, abiding by WAI-ARIA requirements
 */
export class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {

  state = { checked: true };

  componentDidMount() {
    if(this.props.checked !== undefined) {
      this.setState({checked: this.props.checked});
    }
  }

  componentDidUpdate() {
    if(this.props.checked !== undefined && this.props.checked !== this.state.checked) {
      this.setState({checked: this.props.checked});
    }
  }

  setChecked(checked: boolean) {
    this.setState({checked});
    this.props.setChecked?.(checked);
  }

  render() {
    const { type = 'box', checked, setChecked, label, direction = 'left', ...props} = this.props;
    // If id is ommited, try to generate an id
    const id = props.id ?? (`checkbox-input-${Math.floor((Math.random() * 1000))}`);

    return (
      <div className={`${styles['check-box']} ${styles[type]}`}>
        <input
          id={id}
          className={styles['visually-hidden']}
          type='checkbox'
          checked={this.state.checked}
          onChange={e => this.setChecked(e.target.checked)}
          {...props}
        />
        <label
          htmlFor={id}
          title={props.title}
          className={styles[direction]}
        >
          {label}
        </label>
      </div>
    );
  }

}
