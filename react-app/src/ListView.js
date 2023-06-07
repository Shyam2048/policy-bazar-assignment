import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './actions';
import { fetchUsers } from './api';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import './App.css';

const ListView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(11);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers(currentPage, perPage);
      dispatch(setUsers(data));
    };
    fetchData();
  }, [dispatch, currentPage, perPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <Link to={`/details/${user.id}`}>{user.first_name} {user.last_name}</Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        perPage={perPage}
        totalItems={users.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ListView;
