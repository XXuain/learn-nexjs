/** @format */

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs/promises'; // file system
import path from 'path';

function Detail({ product }) {
  const router = useRouter();

  // 當 fallback: true 頁面生成時 router.isFallback 會一直為 true
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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

  // 當 fallback: true 時 動態資料來決定是否回傳 404
  // 回傳 404 -> return { notFound: true };
  if (!product) {
    return { notFound: true };
  }

  return { props: { product } };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((p) => p.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    /**
     * fallback: false 不存在 回傳 404
     * fallback: true 不存在 不回傳 404, 動態產生新頁面
     * fallback: 'blocking' 不回傳 404, 沒有router.isFallback 狀態,
     * 而是讓頁面卡在 getStaticProps 階段，體驗非常像 getServerSideProps
     */
    fallback: true,
  };
}

export default Detail;
