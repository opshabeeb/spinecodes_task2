import React, { useEffect, useState } from 'react';
import { ref, onValue,remove } from 'firebase/database';  // Only import what you need
import './Home.css';
import fireDb from '../../Firebase';  // Import the initialized fireDb
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const contactsRef = ref(fireDb, 'contacts');  // Use the initialized fireDb

    onValue(contactsRef, (snapshot) => {
      const dataSnapshot = snapshot.val();
      if (dataSnapshot) {
        setData(dataSnapshot);
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete=(id)=>{
    if(window.confirm('are you sure')){
      const contactRef = ref(fireDb, `contacts/${id}`);
      remove(contactRef)
      .then(() => {
        alert('Contact deleted successfully');
      })
    }
  }

  return (
    <div style={{ marginTop: '50px' }}>
        <h1 style={{textAlign:'center'}}>Contact datas</h1>
      <table className="customTable">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Email</th>
            <th style={{ textAlign: 'center' }}>Contact</th>
            <th style={{ textAlign: 'center' }}>actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No Contacts Found</td>
            </tr>
          ) : (
            Object.keys(data).map((id, index) => (
              <tr key={id}>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                <Link to={`/detail/${id}`}>
                    <button className='btn-edit'>View</button>
                    </Link>
                    <Link to={`/update/${id}`}>
                    <button className='btn-edit'>Edit</button>
                    </Link>
                    
                    <button className='btn-edit btn-delete' onClick={()=>onDelete(id)}>Delete</button>
                    
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
