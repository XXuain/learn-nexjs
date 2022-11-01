/** @format */

import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url, id) =>
  fetch(`https://fakestoreapi.com${url}/${id}`).then((res) => res.json());

function CartDetail() {
  const router = useRouter();
  const { id } = router.query;

  console.log('query', id);
  const { data, error } = useSWR(id ? ['/carts', id] : null, fetcher);
  return <div>CartDetail</div>;
}

export default CartDetail;
