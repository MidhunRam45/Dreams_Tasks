import { useFormik } from "formik";
import "./form.css";
import * as Yup from "yup";

function Form() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
    DOB: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phone: Yup.string()
      .required("Required")
      .test(
        "is-valid-phone",
        "Phone number should have exactly 10 digits",
        (value) => {
          return value && value.length === 10;
        }
      ),
  });

  const formikObj = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
      phone: "",
      DOB: "",
      gender: "",
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema,
  });

  return (
    <form onSubmit={formikObj.handleSubmit}>
      <h1>Registration Form</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={formikObj.values.name}
          onChange={formikObj.handleChange}
          onBlur={formikObj.handleBlur}
        />
      </div>
      {formikObj.touched.name && formikObj.errors.name ? (
        <div className="error-container">{formikObj.errors.name}</div>
      ) : null}

      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="text"
          value={formikObj.values.email}
          onChange={formikObj.handleChange}
          onBlur={formikObj.handleBlur}
        />
      </div>
      {formikObj.touched.email && formikObj.errors.email ? (
        <div className="error-container">{formikObj.errors.email}</div>
      ) : null}

      <div>
        <label htmlFor="channel">Channel:</label>
        <input
          name="channel"
          type="text"
          value={formikObj.values.channel}
          onChange={formikObj.handleChange}
          onBlur={formikObj.handleBlur}
        />
      </div>
      {formikObj.touched.channel && formikObj.errors.channel ? (
        <div className="error-container">{formikObj.errors.channel}</div>
      ) : null}

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          name="phone"
          type="text"
          value={formikObj.values.phone}
          onChange={formikObj.handleChange}
          onBlur={formikObj.handleBlur}
        />
      </div>
      {formikObj.touched.phone && formikObj.errors.phone ? (
        <div className="error-container">{formikObj.errors.phone}</div>
      ) : null}

      <div>
        <label htmlFor="DOB">Date of birth:</label>
        <input
          name="DOB"
          type="date"
          value={formikObj.values.DOB}
          onChange={formikObj.handleChange}
          onBlur={formikObj.handleBlur}
        />
      </div>
      {formikObj.touched.DOB && formikObj.errors.DOB ? (
        <div className="error-container">{formikObj.errors.DOB}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
