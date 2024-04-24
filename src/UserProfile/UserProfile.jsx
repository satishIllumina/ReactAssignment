import { useEffect, useRef, useState } from "react";
import "../App.css";

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
      formErrors.email = "use abc@gmail.com format";
    }
    if (!formDetails.phone) {
      formErrors.phone = "phone is required";
    } else if (!phoneRegex.test(formDetails.phone)) {
      formErrors.phone = "use +91 7979797979 format";
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
      <div className="sm:flex sm:gap-8 flex-row gap-8 justify-center m-8">
        <form
          className={
            Object.keys(errors).length === 0
              ? "shadow-lg"
              : "shadow-lg shadow-red-300"
          }
          onSubmit={handleSubmit}
        >
          <div>
            {Object.keys(formDetails).map((item, i) => (
              <div key={i}>
                <div className="inputs">
                  <label className="my-4">
                    {item}
                    <span style={{ color: "red" }}>*</span> :
                  </label>
                  <div
                    className=""
                    style={{ display: item === "phone" ? "flex" : "block" }}
                  >
                    <select
                      onChange={(e) => {
                        setFormDetails({
                          ...formDetails,
                          phone: e.target.value,
                        });
                        phoneFocus.current.focus();
                      }}
                      className="py-1"
                      style={{ display: item === "phone" ? "inline" : "none" }}
                    >
                      <option value={"+91 "}>IND</option>
                      <option value={"+92 "}>PAK</option>
                    </select>

                    <input
                      class="my-3 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    "
                      name={item}
                      ref={item === "phone" ? phoneFocus : null}
                      type="text"
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
            <button
              type="submit"
              className="bg-cyan-500 p-2 py-1 text-white border rounded-lg my-2"
            >
              submit
            </button>
          </div>
        </form>
        <div className="secondDiv shadow-lg">
          <div className="flex-row justify-content-between">
            <p>Name : {finalData.name}</p>
            <p>Email: {finalData.email}</p>
            <p>Phone: {finalData.phone}</p>
            <p>Hobbies: {finalData.hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
