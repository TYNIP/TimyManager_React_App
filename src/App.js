import {React, useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { DashboardPage } from "./containers/dashboardPage/dashboardPage";

function App() {

 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);

 const addContact = (name, phoneNumber, email) =>{
  setContacts([...contacts,
    {
      name: "Name: "+ name,
      phoneNumber: "Phone: "+ phoneNumber,
      email: "Email: " + email
    },
  ]);
 };

 const addAppointment = (name, contact, date, time, description) =>{
  setAppointments([...appointments, 
    {
      name: "Appointment: " + name,
      contact: "Contact: " + contact,
      date: "Date: " + date,
      time: "Time: " +time,
      description: "Description: " + description
    },
  ]);
 };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.DASHBOARD} replace/> }/>
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage contacts={contacts} addContact={addContact} appointments={appointments} addAppointment={addAppointment}/>}/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/>}/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>}/>
    </Route>
  )); 
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
