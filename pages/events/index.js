/** @format */

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../data/dummy-data';
import EventList from 'components/events/event-list';
import EventsSearch from 'components/events/events-search';

function Events() {
  const router = useRouter();
  const featuredEvents = getAllEvents();
  const onSearchHandle = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={onSearchHandle} />
      <EventList items={featuredEvents} />;
    </Fragment>
  );
}
export default Events;
