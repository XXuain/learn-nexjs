/** @format */
import Head from 'next/head';
import fs from 'fs/promises'; // file system
import path from 'path';

function Home(props) {
  // console.log('props', props);
  return (
    <>
      <Head>
        <title>This is page title</title>
        <meta
          name="description"
          content={'Browser a huge list of highly active React neetups!'}
        />
      </Head>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy_products.json');
  const data = await fs.readFile(filePath);
  const jsonData = JSON.parse(data);

  return {
    props: { products: jsonData.products },
  };
}

export default Home;
