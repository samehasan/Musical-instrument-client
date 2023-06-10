import React from 'react';

const MyCart = ({ location }) => {
  const myCart = location.state.myCart;

  return (
    <div className="cart">
      <h2>My Cart</h2>
      {myCart.map((selectedClass) => (
        <div key={selectedClass._id}>
          <p>{selectedClass.name}</p>
          <p>Instructor: {selectedClass.instructor}</p>
          <p>Price: {selectedClass.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
