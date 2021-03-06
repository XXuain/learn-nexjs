/** @format */
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'mmm111',
    image:
      'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_24157/20210302064554_MlaQe/jpg',
    address: 'this is address',
  },
  {
    id: 'm2',
    title: 'mmm2222',
    image:
      'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_24157/20210302064554_MlaQe/jpg',
    address: 'this is address222',
  },
];

function Home(props) {
  return (
    <>
      <Head>
        <title>This is page title</title>
        <meta
          name="description"
          content={'Browser a huge list of highly active React neetups!'}
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data for api
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  // get db
  const client = await MongoClient.connect('mongodb+srv://xxxx');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // second
  };
}

export default Home;
