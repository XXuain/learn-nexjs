/** @format */

import React from 'react';

function UserProfile(props) {
  return <div>{props.username}</div>;
}

export async function getServerSideProps(context) {
  return {
    props: { username: 'Max' },
  };
}

export default UserProfile;
