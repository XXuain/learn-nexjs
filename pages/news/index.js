import Link from 'next/link';
import { Fragment } from 'react';

function News() {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/12">12</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default News;
