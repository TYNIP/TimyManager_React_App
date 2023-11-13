import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

 const [name, setName] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [email, setEmail] = useState("");
 const [duplicate, setDuplicate]= useState(false);

 /* Only add a new contact on form submission if it does not duplicate an existing contact’s name */
 //Add contact and clear form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate){
      addContact(name, phoneNumber, email);
      setName("");
      setPhoneNumber("");
      setEmail("");
      setTimeout(() => alert("Contact Successfully Added"), 500)
    }
  };

  // Check for contact name in the contacts array variable in props
 useEffect(() =>{
  //Check if contact is already in contacts
  const searcher = () =>{
    const result = contacts.find(contact => contact.name === name);
    if (result !== undefined){
      return true;
    } else {
      return false;
    };
  };
  if (searcher()){
    setDuplicate(true);
    alert("This contact already exists");
  } else {
    setDuplicate(false);
  }
    
 },[name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
        name={name}
        setName={setName}
        phone={phoneNumber}
        setPhone={setPhoneNumber}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
