/** @format */

import React from 'react';

function UserIdPage(props) {
  console.log('props', props);
  return <div>{props.id}</div>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: { id: 'user-id: ' + userId },
  };
}

export default UserIdPage;
