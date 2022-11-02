/** @format */

import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ttttttttt`,
      },
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const fetcher = (url) => {
  return axios(`/api/${url}`).then((res) => {
    console.log('res', res.data);
    return res.data;
  });
};

function CartsPage() {
  const { data: carts, error } = useSWR('date', fetcher);
  console.log('res: ', carts, error);

  if (error) return <div>failed to load</div>;
  if (!carts) return <div>loading...</div>;
  return (
    <>
      <h4>api date 封裝測試</h4>
    </>
  );
}

export default CartsPage;
