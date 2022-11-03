/** @format */

import React from 'react';
import EventList from 'components/events/event-list';
import { getFeaturedEvents } from '../../data/dummy-data';
function Events() {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
}
export default Events;
