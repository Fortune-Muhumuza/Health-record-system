import React from 'react'

function register(){
return(
    <div>
    <h2>Register</h2>
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

export default register;