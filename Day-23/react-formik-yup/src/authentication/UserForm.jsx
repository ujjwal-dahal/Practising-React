import * as yup from "yup";
import { useState } from "react";
import "../styles/UserForm.scss";
import { toast } from "react-toastify";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    number: "",
    favFood: [],
  });

  const [inputError, setInputError] = useState({});

  const userSchema = yup.object().shape({
    name: yup.string().required("Name Field is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .min(8, "Password must contain at least 8 characters")
      .required("Password is required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Password didn't match")
      .required("Confirm Password is required"),
    number: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),

    favFood: yup.array().min(1, "Select At Least One"),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInputError({}); // Clear previous errors
    try {
      await userSchema.validate(formData, { abortEarly: false });
      console.log("Data is Submitted");
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setInputError(newErrors);
    }
  };

  const handleClick = (event) => {
    let { value, checked, name } = event.target;
    // console.log(value , checked , name);

    if (checked) {
      setFormData((prevData) => {
        let newData = {
          ...prevData,
          [name]: [...prevData.favFood, value],
        };

        return newData;
      });
    }
  };

  console.log(formData);

  return (
    <>
      <div className="form">
        <h1>User Form</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="username">
            <label htmlFor="username">Name : </label>
            <input
              type="text"
              name="name"
              id="username"
              value={formData.name}
              onChange={handleChange}
            />
            {inputError.name && (
              <div style={{ color: "red" }}>{inputError.name}</div>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {inputError.email && (
              <div style={{ color: "red" }}>{inputError.email}</div>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {inputError.password && (
              <div style={{ color: "red" }}>{inputError.password}</div>
            )}
          </div>
          <div className="confirm-password">
            <label htmlFor="confirm-password">Confirm Password : </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm-password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
            {inputError.confirm_password && (
              <div style={{ color: "red" }}>{inputError.confirm_password}</div>
            )}
          </div>
          <div className="number">
            <label htmlFor="number">Number : </label>
            <input
              type="text"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
            />
            {inputError.number && (
              <div style={{ color: "red" }}>{inputError.number}</div>
            )}
          </div>
          <h3>Fav Food</h3>
          <div className="checkbox">
            <div>
              <label htmlFor="momo">Momo</label>
              <input
                type="checkbox"
                name="favFood"
                id="momo"
                value="Momo"
                onClick={handleClick}
              />
            </div>
            <div>
              <label htmlFor="chawmin">Chawmin</label>
              <input
                type="checkbox"
                name="favFood"
                id="chawmin"
                value="Chawmin"
                onClick={handleClick}
              />
            </div>
            <div>
              <label htmlFor="noodles">Noodles</label>
              <input
                type="checkbox"
                name="favFood"
                id="noodles"
                value="Noodles"
                onClick={handleClick}
              />
            </div>
          </div>
          <div>
            {inputError.favFood && (
              <div
                style={{
                  color: "red",
                  marginTop: "-30px",
                  marginBottom: "20px",
                }}
              >
                {inputError.favFood}
              </div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
