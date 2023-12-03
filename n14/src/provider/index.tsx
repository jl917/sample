'use client';
import ReactQuery from './ReactQuery';
import RootStyleRegistry from './RootStyleRegistry';
import Wrap from './Wrap';

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <RootStyleRegistry>
      <ReactQuery>
        <Wrap>{children}</Wrap>
      </ReactQuery>
    </RootStyleRegistry>
  );
};

export default Provider;
