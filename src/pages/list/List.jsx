import React, { useEffect, useState } from 'react';
import fireDb from '../../Firebase';
import { useParams, Link } from 'react-router-dom';
import { ref, get } from 'firebase/database'; // Import ref and get
import './List.css';

function List() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userRef = ref(fireDb, `contacts/${id}`); // Create a reference to the user
    get(userRef).then((snap) => {
      if (snap.exists()) {
        setUser(snap.val());
      } else {
        setUser({});
      }
    });
  }, [id]);

  return (
    <div className="list-container">
      {Object.keys(user).length === 0 ? (
        <h2>No user found!</h2>
      ) : (
        <div className="user-details">
          <h2>{user.name} contact Details</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Contact:</strong> {user.contact}</p>
          <Link to={`/update/${id}`} className="btn-update">Edit</Link>
          <Link to="/" className="btn-back">Back to List</Link>
        </div>
      )}
    </div>
  );
}

export default List;
