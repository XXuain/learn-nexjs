/** @format */

import React from 'react';

function MeetupDetail(props) {
  console.log('meetupData: ', props.meetupData);
  return <div>MeetupDetail</div>;
}

export async function getStaticPaths() {
  // pre-generation dynamic page
  return {
    fallback: false, // true is dynamically
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'mmm2222',
        image:
          'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_24157/20210302064554_MlaQe/jpg',
        address: 'this is address222',
      },
    },
  };
}

export default MeetupDetail;
