import React from 'react';
import CheckBox from './CheckBox';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let root: HTMLElement | null = null;
beforeEach(() => {
  root = document.createElement('div');
  document.body.appendChild(root);
});
afterEach(() => {
  if(root)
  {
    unmountComponentAtNode(root);
    root.remove();
    root = null;
  }
})

it('should render without any props', () => {
  act(() => {
    render(<CheckBox />, root);
  });
  let input = root?.querySelector('input');
  expect(input).not.toBeNull();
  expect(input?.checked).not.toBeUndefined();
  let label = root?.querySelector('label');
  expect(label).not.toBeNull();
});

it('should toggle when input clicked', () => {
  act(() => {
    render(<CheckBox />, root);
  });
  let input = root?.querySelector('input');
  let initialState = input?.checked;
  act(() => {
    input?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(input?.checked).toBe(!initialState);
  act(() => {
    input?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(input?.checked).toBe(initialState);
});

it('should toggle when label clicked', () => {
  act(() => {
    render(<CheckBox />, root);
  });
  let input = root?.querySelector('input');
  let initialState = input?.checked;
  act(() => {
    root?.querySelector('label')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(input?.checked).toBe(!initialState);
  act(() => {
    root?.querySelector('label')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(input?.checked).toBe(initialState);
});

it('should toggle on key press of input', () => {
  act(() => {
    render(<CheckBox />, root);
  });
  let input = root?.querySelector('input');
  let initialState = input?.checked;
  act(() => {
    input?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true}));
  });
  expect(input?.checked).toBe(!initialState);
  act(() => {
    input?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true}));
  });
  expect(input?.checked).toBe(initialState);
});