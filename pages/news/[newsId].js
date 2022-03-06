import { useRouter } from 'next/router';
function NewsItem() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <div>newsId: {newsId}</div>;
}

export default NewsItem;
