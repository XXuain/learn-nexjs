import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
  const onAddMeetupHandler = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
