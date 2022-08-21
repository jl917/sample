import { expect } from 'vitest'

const toMatchAllText = (props, textList) => {
  let isMatchText = true;
  let noMatchtextList = [];

  for (const text of textList) {
    if (!props.innerHTML.includes(text)) {
      isMatchText = false;
      noMatchtextList.push(text);
    }
  }
  if (isMatchText) {
    return {
      message: () => 'success',
      pass: true,
    };
  }
  return {
    message: () => `not match some text "${noMatchtextList.join(', ')}"`,
    pass: false,
  };
};

expect.extend({ toMatchAllText });
