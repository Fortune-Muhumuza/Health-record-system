import React from 'react'

function login(){
return(
    <div>
        <h2>Login</h2>
    <form>
  <label>
    Username:
    <input type="text" name="name" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
  <input type="submit" value="Submit" />
</form>
</div>
)
}

export default login;