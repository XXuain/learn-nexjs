/** @format */

import { Fragment } from 'react';
import fs from 'fs/promises'; // file system
import path from 'path';

function Detail({ product }) {
  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy_products.json');
  const data = await fs.readFile(filePath);
  const jsonData = JSON.parse(data);
  return jsonData;
}

export async function getStaticProps(context) {
  const { params } = context;
  const pid = params.pid;

  const data = await getData();
  const product = data.products.find((p) => p.id === pid);

  return { props: { product } };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((p) => p.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false, // false true blocking
  };
}

export default Detail;
