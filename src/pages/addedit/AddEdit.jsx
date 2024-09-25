import React, { useEffect, useState } from 'react';
import './AddEdit.css';
import { ref, push, update, onValue } from 'firebase/database';  // Import necessary functions
import { useNavigate, useParams } from 'react-router-dom';
import fireDb from '../../Firebase';  // Import the initialized fireDb

const initialState = {
  name: "",
  email: "",
  contact: ""
};

function AddEdit() {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const navigate = useNavigate();
  const { id } = useParams();  // Get ID from URL 
 
  useEffect(() => {
    if (id) {
      const contactRef = ref(fireDb, `contacts/${id}`);
      onValue(contactRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setState(data);  
        }
      });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert('Please provide values for all fields');
      return;
    }

    const contactsRef = ref(fireDb, 'contacts');
    if (id) {
      // Update 
      const contactRef = ref(fireDb, `contacts/${id}`);
      update(contactRef, state, (err) => {
        if (err) {
          alert('Error updating contact');
        } else {
          alert('Contact updated successfully');
        }
      });
    } else {
      // Add 
      push(contactsRef, state, (err) => {
        if (err) {
          alert('Error adding contact');
        } else {
          alert('Contact added successfully');
        }
      });
    }
    setTimeout(() => navigate('/'), 500);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          placeholder="Enter contact number"
          name="contact"
          value={contact}
          onChange={handleInputChange}
        />
        <input type="submit" value={id? "update" :"save"} />
      </form>
    </div>
  );
}

export default AddEdit;
