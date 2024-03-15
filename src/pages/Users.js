import React, { useState } from 'react';

function Users() {
  const [state, setState] = useState({
    uname: '',
    city: '',
    email: '',
    pasword: '',
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUser((prevState) => ({ ...prevState, [name]: value }));

    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // const initalState = { ...state };
    // const { name, value } = e.target;
    // initalState[name] = value;
    // setState(initalState);
    // console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="App-content">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="uname"
            placeholder="Please Enter the Name"
            value={state.uname}
            onChange={handleChange}
            // onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="Please Enter the City"
            value={state.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Users;
