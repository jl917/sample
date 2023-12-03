import Navigation from '@/components/Navigation';
import { Layout } from 'antd';

const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const Wrap = ({ children }: Props) => {
  return (
    <>
      <Header style={{background: '#fff'}}>
        <Navigation />
      </Header>
      <Content>{children}</Content>
    </>
  );
};

export default Wrap;
