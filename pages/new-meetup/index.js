/** @format */

import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
  const router = useRouter();
  const onAddMeetupHandler = (formData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    router.push('/');
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
