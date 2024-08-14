import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateEventPage.css';

const CreateEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [description, setDescription] = useState('');
  const [eventImage, setEventImage] = useState(null);
  const [eventPoster, setEventPoster] = useState(null);
  const [activities, setActivities] = useState('');
  const [registrationDeadline, setRegistrationDeadline] = useState('');
  const [registrationFees, setRegistrationFees] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [capacity, setCapacity] = useState('');
  const [schedule, setSchedule] = useState('');
  const [guest, setGuest] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [organizers, setOrganizers] = useState('');
  const [sponsors, setSponsors] = useState('');
  const [ticketingInformation, setTicketingInformation] = useState('');
  const [accessibilityInformation, setAccessibilityInformation] = useState('');
  const [parkingInformation, setParkingInformation] = useState('');
  const [accommodationInformation, setAccommodationInformation] = useState('');
  const [healthAndSafetyGuidelines, setHealthAndSafetyGuidelines] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'eventName':
        setEventName(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'mapLink':
        setMapLink(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'activities':
        setActivities(value);
        break;
      case 'registrationDeadline':
        setRegistrationDeadline(value);
        break;
      case 'registrationFees':
        setRegistrationFees(value);
        break;
      case 'contactDetails':
        setContactDetails(value);
        break;
      case 'capacity':
        setCapacity(value);
        break;
      case 'schedule':
        setSchedule(value);
        break;
      case 'guest':
        setGuest(value);
        break;
      case 'specialRequirements':
        setSpecialRequirements(value);
        break;
      case 'socialMediaLinks':
        setSocialMediaLinks(value);
        break;
      case 'eventCategory':
        setEventCategory(value);
        break;
      case 'organizers':
        setOrganizers(value);
        break;
      case 'sponsors':
        setSponsors(value);
        break;
      case 'ticketingInformation':
        setTicketingInformation(value);
        break;
      case 'accessibilityInformation':
        setAccessibilityInformation(value);
        break;
      case 'parkingInformation':
        setParkingInformation(value);
        break;
      case 'accommodationInformation':
        setAccommodationInformation(value);
        break;
      case 'healthAndSafetyGuidelines':
        setHealthAndSafetyGuidelines(value);
        break;
      default:
        break;
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setEventImage(file);
  };

  const handlePosterUpload = (e) => {
    const file = e.target.files[0];
    setEventPoster(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!eventName || !startDate || !endDate || !description) {
      alert('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      const newEvent = {
        eventName,
        startDate,
        endDate,
        location,
        mapLink,
        description,
        activities,
        registrationDeadline,
        registrationFees,
        contactDetails,
        capacity,
        schedule,
        guest,
        specialRequirements,
        socialMediaLinks,
        eventCategory,
        organizers,
        sponsors,
        ticketingInformation,
        accessibilityInformation,
        parkingInformation,
        accommodationInformation,
        healthAndSafetyGuidelines,
        eventImage: eventImage ? await convertImageToBase64(eventImage) : null,
        eventPoster: eventPoster ? await convertImageToBase64(eventPoster) : null,
      };

      try {
        const response = await fetch('http://localhost:8080/api/events/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
        });
  
        if (!response.ok) {
          throw new Error('Error response: ' + response.statusText);
        }
  
        const result = await response.json();
        console.log('Event created:', result);
      } catch (error) {
        console.error('Error creating event:', error);
      }

      setSuccessMessage('Event Created Successfully!');
      console.log("Event ",newEvent); 
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the event.');
    } finally {
      setLoading(false);
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const createEvent = async (eventData) => {
    try {
      const response = await fetch('http:localhost:8080/api/events/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Error response: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Event created:', result);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const resetForm = () => {
    setEventName('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setMapLink('');
    setDescription('');
    setActivities('');
    setRegistrationDeadline('');
    setRegistrationFees('');
    setContactDetails('');
    setCapacity('');
    setSchedule('');
    setGuest('');
    setSpecialRequirements('');
    setSocialMediaLinks('');
    setEventCategory('');
    setOrganizers('');
    setSponsors('');
    setTicketingInformation('');
    setAccessibilityInformation('');
    setParkingInformation('');
    setAccommodationInformation('');
    setHealthAndSafetyGuidelines('');
    setEventImage(null);
    setEventPoster(null);
  };

  return (
    <div className="create-event-page">
      <h2>Create Event</h2>
      <form className="create-event-form" onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={eventName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </label>
        <label>
          Map Link:
          <input
            type="text"
            name="mapLink"
            value={mapLink}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <label>
          Event Image:
          <input type="file" onChange={handleImageUpload} />
        </label>
        <label>
          Event Poster:
          <input type="file" onChange={handlePosterUpload} required />
        </label>
        <label>
          Activities:
          <textarea
            name="activities"
            value={activities}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Registration Deadline:
          <input
            type="date"
            name="registrationDeadline"
            value={registrationDeadline}
            onChange={handleChange}
          />
        </label>
        <label>
           Registration Fees:
          <input
            type="text"
            name="registrationFees"
            value={registrationFees}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Details:
          <textarea
            name="contactDetails"
            value={contactDetails}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Capacity:
          <input
            type="number"
            name="capacity"
            value={capacity}
            onChange={handleChange}
          />
        </label>
        <label>
          Schedule:
          <textarea
            name="schedule"
            value={schedule}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Guest:
          <input
            type="text"
            name="guest"
            value={guest}
            onChange={handleChange}
          />
        </label>
        <label>
          Special Requirements:
          <textarea
            name="specialRequirements"
            value={specialRequirements}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Social Media Links:
          <input
            type="text"
            name="socialMediaLinks"
            value={socialMediaLinks}
            onChange={handleChange}
          />
        </label>
        <label>
          Event Category:
          <input
            type="text"
            name="eventCategory"
            value={eventCategory}
            onChange={handleChange}
          />
        </label>
        <label>
          Organizers:
          <textarea
            name="organizers"
            value={organizers}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Sponsors:
          <textarea
            name="sponsors"
            value={sponsors}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Ticketing Information:
          <textarea
            name="ticketingInformation"
            value={ticketingInformation}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Accessibility Information:
          <textarea
            name="accessibilityInformation"
            value={accessibilityInformation}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Parking Information:
          <textarea
            name="parkingInformation"
            value={parkingInformation}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Accommodation Information:
          <textarea
            name="accommodationInformation"
            value={accommodationInformation}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Health and Safety Guidelines:
          <textarea
            name="healthAndSafetyGuidelines"
            value={healthAndSafetyGuidelines}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Event...' : 'Create Event'}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default CreateEventPage;
