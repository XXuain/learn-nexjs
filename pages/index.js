/** @format */

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
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 1, // second
  };
}

export default Home;
