/** @format */

import React from 'react';
import useSWR from 'swr';

const fetcher = (url) =>
  fetch(`https://fakestoreapi.com${url}`).then((res) => res.json());

function CartsPage() {
  const { data: carts, error } = useSWR('/carts', fetcher);
  console.log('useSWR res: ', carts, error);

  if (error) return <div>failed to load</div>;
  if (!carts) return <div>loading...</div>;
  return (
    <>
      <h4>購物車列表</h4>
      <ul>
        {carts.map((cart, idx) => (
          <React.Fragment key={idx}>
            <li>cart id: {cart.id}</li>
            <li key={cart.id}>
              cart products:
              <ul>
                {cart.products.map((product) => (
                  <li key={product.productId}>{product.quantity}</li>
                ))}
              </ul>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default CartsPage;
