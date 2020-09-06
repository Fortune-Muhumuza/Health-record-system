import React from 'react';


function receptionPage() {

    const user = 'Muhumuza'

  return (
    <div>
     <h2>Reception desk</h2>
     <p>Logged in as: {user}</p>
     <h3>Patient details</h3>
     <form>
  <label>
    First name:
    <input type="text" name="firstName" />
  </label>
  <label>
    Second name:
    <input type="password" name="secondName" />
  </label>
  <label>
    Gender:
    <input type="password" name="gender" />
  </label>
  <label>
    Age:
    <input type="password" name="age" />
  </label>
  <label>
    Address:
    <input type="password" name="address" />
  </label>
  <label>
    Phone Number:
    <input type="password" name="phoneNumber" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default receptionPage;
