/** @format */
/**
 * getStaticProps 搭配 useSWR
 * 資料庫更新 useSWR 自動偵測更新畫面資料
 */
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => {
  return fetch(
    `https://next-course-8b9c4-default-rtdb.firebaseio.com/${url}`
  ).then((res) => res.json());
};

const dataHandler = (data) => {
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return transformedSales;
};

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR('sales.json', fetcher);

  useEffect(() => {
    if (data) {
      const transformedSales = dataHandler(data);
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const data = await fetcher('sales.json');
  const transformedSales = dataHandler(data);
  return { props: { sales: transformedSales } };
}

export default LastSalesPage;
