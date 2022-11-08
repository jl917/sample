import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('버튼 테스트', () => {
  // Arrange

  // Act
  const props = render(<Button />);

  // Assert
  expect(props.getByTestId('a01').innerHTML).toEqual('hello');
});
