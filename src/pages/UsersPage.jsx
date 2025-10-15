import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => setUsers(data.results || []));
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">Пользователи (Random User API)</h2>
      <div className="row g-4">
        {users.map((u) => (
          <div className="col-md-6 col-lg-4" key={u.login.uuid}>
            <div className="card h-100">
              <div className="card-body d-flex align-items-center">
                <img
                  src={u.picture.thumbnail}
                  alt={`${u.name.first} ${u.name.last}`}
                  className="rounded-circle me-3"
                  width="56"
                  height="56"
                />
                <div>
                  <h5 className="card-title mb-1">{u.name.title} {u.name.first} {u.name.last}</h5>
                  <p className="mb-1"><strong>Email:</strong> {u.email}</p>
                  <p className="mb-0"><strong>Страна:</strong> {u.location.country}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;


