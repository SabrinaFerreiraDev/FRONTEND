import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    queryType: yup.string().required("Please select a query type"),
    message: yup.string().required(),
    terms: yup
      .boolean()
      .isTrue("To submit this form, please consent to being contacted")
      .required(),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (data) {
      document.querySelector(".success").style.display = "block";
    }
  };

  return (
    <>
      <div className="Container">
        <div className="success">
          <h1>Message Sent</h1>
          <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact Us</h1>
          <div className="CamposName">
            <label className="fistname">
              <p>First Name</p>
              <input
                {...register("firstName", { required: true })}
                placeholder="First Name"
                id="fistname"
                type="text"
              />
              <span className="error-firstname">
                {errors.firstName?.message}
              </span>
            </label>
            <label className="lastname">
              <p>Last Name</p>
              <input
                {...register("lastName", { required: true })}
                placeholder="Last Name"
                id="lastname"
                type="text"
              />
              <span className="error-lastname">{errors.lastName?.message}</span>
            </label>
          </div>
          <label className="email">
            <p>Email</p>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              id="email"
              type="email"
            />
            <span className="error-email">{errors.email?.message}</span>
          </label>
          <label className="radios">
            <p>Query Type</p>
            <div className="radios-buttons">
              <label className="ButtonRadios" htmlFor="queryType1">
                <input
                  {...register("queryType", { required: true })}
                  id="queryType1"
                  type="radio"
                  value="general"
                />
                General Enquiry
              </label>

              <label className="ButtonRadios" htmlFor="queryType2">
                <input
                  {...register("queryType", { required: true })}
                  id="queryType2"
                  type="radio"
                  value="support"
                />
                Support Request
              </label>
            </div>

            <span className="error-radio">{errors.queryType?.message}</span>
          </label>

          <label className="message">
            <p>Message</p>
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              id="message"
              type="text"
            />
            <span className="error">{errors.message?.message}</span>
          </label>
          <br />
          <label className="terms">
            <div className="terms-checkbox">
              <input
                {...register("terms", { required: true })}
                id="terms"
                type="checkbox"
              />
              <p>I consent to being contacted by the team</p>
            </div>

            <span className="error-terms">{errors.terms?.message}</span>
          </label>

          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
