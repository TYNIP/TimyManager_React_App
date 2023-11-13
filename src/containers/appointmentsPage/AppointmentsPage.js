import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts
}) => {
  const [name, setName] = useState("You Have No Appointments");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time, description);
    setName("");
    setContact("");
    setDate("");
    setTime("");
    setDescription("");
    setTimeout(() => alert("Appointment Successfully Added"), 500)
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          name={name}
          setTitle={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          description={description}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </>
  );
};
