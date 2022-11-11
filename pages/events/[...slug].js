/** @format */

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from 'helpers/api-utils';
import EventList from 'components/events/event-list';
import ResultsTitle from 'components/events/results-title';
import Button from 'components/ui/button';

function FilteredEvents({ hasError, filteredEvents, year, month }) {
  if (hasError) {
    return (
      <Fragment>
        <p>No events found for the chosen filter!</p>;
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // error
  const error =
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12;
  if (error) {
    return {
      // notFound: true,
      hasError: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: { filteredEvents, year: numYear, month: numMonth },
  };
}
export default FilteredEvents;
