import {React, useMemo} from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  description,
  setDescription,
  handleSubmit
}) => {
  /* GET CONTACT NAMES */
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);
/* SUBMIT FORM APPOINTMENTS*/
  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Appointment Name"
          aria-label="Appointment Name"
        />
         <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Date Picker"
        />
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Time Picker"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          cols={50}
          placeholder="Write Description"
          required
          aria-label="Appointment Description"
        />
        <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
    </form>
  );
};
