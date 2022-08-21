import Button from "./Button";
import { render, fireEvent } from '@testing-library/react';
import { expect, it } from 'vitest';

it('renders correctly', () => {
  const str = 'dao'
  const props = render(<Button text={str} />);
  expect(props.getByTestId('button')).toMatchAllText(['123', 'text'])
})