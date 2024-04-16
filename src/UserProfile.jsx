import { useEffect, useRef, useState } from "react";
import "./App.css";

function UserProfile() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    hobbies: "",
  });

  const [finalData, setFinalData] = useState({});
  const phoneFocus = useRef();

  // const [countryCode,setCountryCode] = useState("")

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  const validate = () => {
    const formErrors = {};
    const nameRegex = /[0-9]/;
    const emailRegex = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm;
    const phoneRegex = /^(([+91 |+92 ]{4}|[+91|+92]{3})[0-9]{10})$/;
    if (!formDetails.name) {
      formErrors.name = "name is required";
      // setErrors({ ...errors, [item]: `${item} is required` });
    } else if (nameRegex.test(formDetails.name)) {
      formErrors.name = "Enter String Values";
    }
    if (!formDetails.email) {
      formErrors.email = "email is required";
    } else if (!emailRegex.test(formDetails.email)) {
      formErrors.email = "Enter correct email";
    }
    if (!formDetails.phone) {
      formErrors.phone = "phone is required";
    } else if (!phoneRegex.test(formDetails.phone)) {
      formErrors.phone = "Enter correct phone";
    }
    if (!formDetails.hobbies) {
      formErrors.hobbies = "hobbies is required";
    }
    setErrors(formErrors);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setFinalData(formDetails);
    }
  }, [errors]);

  return (
    <div style={{ height: "100vh" }}>
      <div className="mainuserprofile">
        <form
          style={{
            boxShadow:
              Object.keys(errors).length === 0
                ? "1px 1px 1rem 1px aqua"
                : "1px 1px 1rem 1px red",
          }}
          onSubmit={handleSubmit}
        >
          <div>
            {Object.keys(formDetails).map((item, i) => (
              <div key={i}>
                <div className="inputs">
                  <label>
                    {item}
                    <span style={{ color: "red" }}>*</span> :
                  </label>
                  <div style={{ display: item === "phone" ? "flex" : "block" }}>
                    <select
                      onChange={(e) => {
                        setFormDetails({
                          ...formDetails,
                          phone: e.target.value,
                        });
                        phoneFocus.current.focus();
                      }}
                      style={{ display: item === "phone" ? "inline" : "none" }}
                    >
                      <option value={"+91 "}>IND</option>
                      <option value={"+92 "}>PAK</option>
                    </select>

                    <input
                      name={item}
                      ref={item === "phone" ? phoneFocus : null}
                      type={
                        item === "email"
                          ? "email"
                          : item === "phone"
                          ? "tel"
                          : "text"
                      }
                      value={formDetails[item]}
                      placeholder={`Enter ${item}`}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <p
                  style={{
                    textAlign: "right",
                    color: "red",
                    fontSize: "10px",
                  }}
                >
                  {errors[item]}
                </p>
              </div>
            ))}
            <input type="submit" />
          </div>
        </form>
        <div className="secondDiv">
          {
            <div>
              <p>Name : {finalData.name}</p>
              <p>Email: {finalData.email}</p>
              <p>Phone: {finalData.phone}</p>
              <p>Hobbies: {finalData.hobbies}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
