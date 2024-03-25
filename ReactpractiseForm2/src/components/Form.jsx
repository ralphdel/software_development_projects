import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const [entries, setEntries] = useState([]);
  const [errormessage, setErrormessage] = useState("");
  const [showpassword, setShowpassword] = useState(true);

  const Handleinputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const Handleformsubmit = (e) => {
    e.preventDefault();

    const Errormessage = !inputs.name
      ? "name cannot be empty"
      : !inputs.email
      ? "email cannot be empty"
      : !inputs.password
      ? "Password cannot be empty"
      : "";
    setErrormessage(Errormessage);

    if (!Errormessage) {
      setEntries((preventries) => [
        ...preventries,
        {
          Username: inputs.name,
          Useremail: inputs.email,
          Userpassword: inputs.password,
          id: "2024" + entries.length + "wrtygf",
        },
      ]);
      setInputs({ name: "", email: "", password: "" });

      console.log(entries);
    }
  };

  const emailRegex = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/";

  return (
    <>
      <h2>RALPH'S FORM VALIDATION</h2>
      <form onSubmit={Handleformsubmit}>
        <div>
          <label htmlFor=""> Name </label>
          <input
            type="text"
            name="name"
            placeholder="type name here "
            value={inputs.name}
            onChange={Handleinputs}
          />
        </div>
        <div>
          <label htmlFor=""> Email </label>
          <input
            type="email"
            name="email"
            placeholder="enter your email address"
            value={inputs.email}
            onChange={Handleinputs}
            pattern={emailRegex}
          />
        </div>
        <div>
          <label htmlFor="">Password </label>
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            placeholder="type password here"
            value={inputs.password}
            onChange={Handleinputs}
            minLength={8}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={showpassword}
            onChange={() => setShowpassword(!showpassword)}
          />
        </div>

        <button> SUBMIT</button>
      </form>
      <div style={{color:'red'}}  >
        {errormessage}
      </div>
    </>
  );
};

export default Form;
