/** @format */

import fs from 'fs/promises'; // file system
import path from 'path';

function Products(props) {
  return <div>Products</div>;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy_products.json');
  const data = await fs.readFile(filePath);
  const jsonData = JSON.parse(data);

  if (!jsonData) {
    return { redirect: { destination: '/no-data' } };
  }

  // 回傳 notFound 將沒有此頁面
  if (jsonData.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: { products: jsonData.products },
    revalidate: 10,
  };
}

export default Products;
