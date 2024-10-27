import * as yup from "yup";
import { Formik, useFormik } from "formik";
import { toast } from "react-toastify";
import TextField from "./TextField";

const UserFormFormik = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirm_password: "",
  //     number: "",
  //     favFood: [],
  //   },

  //   onSubmit: (values) => {
  //     console.log(values);
  //     toast.success("Data Submitted Successfully!")

  //   },

  //   validationSchema: yup.object({
  //     name: yup.string().required("Name Field is required"),
  //     email: yup
  //       .string()
  //       .email("Email is invalid")
  //       .required("Email is required"),
  //     password: yup
  //       .string()
  //       .matches(
  //         /[!@#$%^&*(),.?":{}|<>]/,
  //         "Password must contain at least one symbol"
  //       )
  //       .matches(/[0-9]/, "Password must contain at least one number")
  //       .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  //       .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  //       .min(8, "Password must contain at least 8 characters")
  //       .required("Password is required"),
  //     confirm_password: yup
  //       .string()
  //       .oneOf([yup.ref("password")], "Password didn't match")
  //       .required("Confirm Password is required"),
  //     number: yup
  //       .string()
  //       .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
  //       .required("Phone number is required"),

  //     favFood: yup.array().min(1, "Select At Least One"),
  //   }),
  // });

  let validationSchema = yup.object({
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

  const handleClick = (event , formik) => {
    let { value, checked } = event.target;
    // console.log(value , checked , name);

    if (checked) {
      formik.setFieldValue("favFood", [...formik.values.favFood, value]);
    } else {
      formik.setFieldValue(
        "favFood",
        formik.values.favFood.filter((food) => {
          return food != value;
        })
      );
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm_password: "",
          number: "",
          favFood: [],
        }}
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <div className="form">
              <h1>User Form</h1>
              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className="username">
                  <label htmlFor="">Name : </label>
                  {/* <input
              type="text"
              name="name"
              id="username"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            )} */}

                  <TextField name="name" type="text" />
                </div>
                <div className="email">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  )}
                </div>
                <div className="password">
                  <label htmlFor="password">Password : </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                  )}
                </div>
                <div className="confirm-password">
                  <label htmlFor="confirm-password">Confirm Password : </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm-password"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.confirm_password && (
                    <div style={{ color: "red" }}>
                      {formik.errors.confirm_password}
                    </div>
                  )}
                </div>
                <div className="number">
                  <label htmlFor="number">Number : </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.number && (
                    <div style={{ color: "red" }}>{formik.errors.number}</div>
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
                      onClick={(event)=> handleClick(event , formik)}
                    />
                  </div>
                  <div>
                    <label htmlFor="chawmin">Chawmin</label>
                    <input
                      type="checkbox"
                      name="favFood"
                      id="chawmin"
                      value="Chawmin"
                      onClick={(event)=> handleClick(event , formik)}
                    />
                  </div>
                  <div>
                    <label htmlFor="noodles">Noodles</label>
                    <input
                      type="checkbox"
                      name="favFood"
                      id="noodles"
                      value="Noodles"
                      onClick={(event)=> handleClick(event , formik)}
                    />
                  </div>
                </div>
                <div>
                  {formik.errors.favFood && (
                    <div
                      style={{
                        color: "red",
                        marginTop: "-30px",
                        marginBottom: "20px",
                      }}
                    >
                      {formik.errors.favFood}
                    </div>
                  )}
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default UserFormFormik;
