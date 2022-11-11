/** @format */

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from 'helpers/api-utils';
import EventList from 'components/events/event-list';
import EventsSearch from 'components/events/events-search';

function Events(props) {
  const router = useRouter();
  const onSearchHandle = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={onSearchHandle} />
      <EventList items={props.featuredEvents} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getAllEvents();
  return { props: { featuredEvents } };
}
export default Events;
