import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'mmm111',
    image:
      'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_24157/20210302064554_MlaQe/jpg',
    address: 'this is address',
  },
];

export default function Home() {
  return (
    <div>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </div>
  );
}
