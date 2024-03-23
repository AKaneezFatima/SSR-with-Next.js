'use client'
// import React,{useEffect, useState} from 'react'

interface User{
  id:number;
  name:string;
  username:string;
  email:string;
  address: {
    street: string;
    suite:string;
    city:string;
    zipcode:string;
  };
  geo: {
    lat:string;
    lng: string;
  };
}
const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const user:User[] = await res.json();

  return (
    <>
      <p style={{fontSize:'2rem', fontWeight:'bold', marginBottom: '20px'}}>User Details</p>
      <ul style={{ listStyle: 'none', padding:0}}>
        {user.map((user, index) => (
        <li key={user.id} style={{ marginBottom: index !== user.length - 1 ? '20px' : '0'}}>

          <div>
            <strong>ID:</strong>{user.id}
          </div>
          <div>
            <strong>Name:</strong>{user.name}
          </div>
          <div>
            <strong>Username:</strong>{user.username}
          </div>
          <div>
            <strong>Email:</strong>{user.email}
          </div>
          <div>
            <strong>Adress:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </div>
          <div>
            <strong>Geo</strong> Lat: {user.geo ? user.geo.lat : 'N/A'}, Lng: {user.geo ? user.geo.lng : 'N/A' }
          </div>
        </li>
      ))}

      </ul>
    </>

  );
};

export default UserPage


// import React from 'react'

// interface User {
//   id: number;
//   name: string;
//   }

// const UsersPage = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const user: User[] = await res.json();

//   return (
//     <>
//     <h1>Users</h1>
//     <ul>
//       {user.map(user => <li key={user.id}>{user.name}</li>)}
//     </ul>
//     </>
//   )
// }

// export default UsersPage

// 'use client'
// import React, { useEffect, useState } from 'react';

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//   };
//   geo: {
//     lat: string;
//     lng: string;
//   };
// }

// const UsersPage = () => {
//   const [users, setUsers] = useState<User[]>([]);


//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const usersData: User[] = await res.json();
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
      // <>
    // <p style={{fontSize: '2rem', fontWeight:'bold', marginBottom:'20px'}}>Users Details</p>
    //   <ul style={{ listStyle: 'none', padding: 0 }}>
    //     {user.map((user, index) => (
    //       <li key={user.id} style={{ marginBottom: index !== user.length - 1 ? '20px' : '0' }}>
    //         <div>
    //           <strong>Name:</strong> {user.name}
    //         </div>
    //         <div>
    //           <strong>Username:</strong> {user.username}
    //         </div>
    //         <div>
    //           <strong>Email:</strong> {user.email}
    //         </div>
    //         <div>
    //           <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
    //         </div>
    //         <div>
    //           <strong>Geo:</strong> Lat: {user.geo ? user.geo.lat : 'N/A'}, Lng: {user.geo ? user.geo.lng : 'N/A'}
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </>

//   );
// };

// export default UsersPage;
