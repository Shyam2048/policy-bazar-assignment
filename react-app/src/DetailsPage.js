// DetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>User Details</h2>
      <div className="card">
        <img src={user.avatar} alt={user.first_name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{user.first_name} {user.last_name}</h5>
          <p className="card-text">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
