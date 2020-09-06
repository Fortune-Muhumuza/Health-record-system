import React from 'react';


function laboratoryPage() {

    const user = 'Dr. Isaac Mubiru'

  return (
    <div>
     <h2>Laboratory</h2>
     <p>Logged in as: {user}</p>
     <h3>Patient results</h3>
     <h4>Blood test</h4>
     <form>
  <label>
    Blood group:
    <input type="text" name="firstName" />
  </label>
  <label>
    Malaria test:
    <input type="password" name="secondName" />
  </label>
  <label>
    HIV test:
    <input type="password" name="gender" />
  </label>
  <h4>Stool test</h4>
  <label>
    Age:
    <input type="password" name="age" />
  </label>
  <label>
    Address:
    <input type="password" name="address" />
  </label>
  <h4>Urine test</h4>
  <label>
    Phone Number:
    <input type="password" name="phoneNumber" />
  </label>
  <label>
    Phone Number:
    <input type="password" name="phoneNumber" />
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

export default laboratoryPage;
