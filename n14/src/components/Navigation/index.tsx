import Link from 'next/link';
import { Button } from 'antd';

const Navigation = () => {
  return (
    <>
      <Link href="/user">
        <Button type="link">user</Button>
      </Link>
    </>
  );
};

export default Navigation;
