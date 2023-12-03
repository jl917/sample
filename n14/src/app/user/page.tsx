'use client';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Login, Name, Result } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/api/user';
import { useEffect, useState } from 'react';

const columns: ColumnsType<Result> = [
  { key: 'login', dataIndex: 'login', title: 'uuid', render: (value: Login) => `${value.uuid}` },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'name',
    render: (value: Name) => `${value.first} - ${value.last}`,
  },
];

export default function User() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Result[]>([]);

  const q = useQuery({
    queryKey: ['users', page],
    queryFn: async () => getUsers(page),
  });

  const onChangePage = (page: number) => {
    setPage(page);
  };
  const dataSource: Result[] = q.data?.data.results || [];

  return (
    <>
      <Table
        rowKey="login.uuid"
        columns={columns}
        loading={q.isLoading}
        dataSource={dataSource}
        pagination={{
          total: 40,
          showTotal: (total) => `Total ${total} items`,
          onChange: onChangePage,
        }}
      />
    </>
  );
}
