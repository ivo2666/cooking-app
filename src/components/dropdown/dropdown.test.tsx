import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from '.';

test('Dropdown', () => {
  render(<Dropdown {...{
    open: false,
    trigger: <button>test</button>,
    menu: [<li className='hidden' key={1}>pesho</li>],
    onClose: () => {}
  }}/>);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeVisible();
});