import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [certOfIncorporation, setCertOfIncorporation] = useState("");
  const [idOfDirectors, setIdOfDirectors] = useState("");
  const [companyKRA, setCompanyKRA] = useState("");
  const [directorsKRA, setDirectorsKRA] = useState("");
  const [cr12, setCr12] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Send a POST request to the server with the user's information
    fetch({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        countryCode: countryCode,
        phoneNumber: phoneNumber,
        email: email,
        password_hash: password,
        userType: userType,
        companyName: companyName,
        certOfIncorporation: certOfIncorporation,
        idOfDirectors: idOfDirectors,
        companyKRA: companyKRA,
        directorsKRA: directorsKRA,
        cr12: cr12,
      }),
    })
      .then((res) => {
        if (res.ok) {
          // Redirect the user to the appropriate page based on their user type
          if (userType === "investor") {
            navigate("/investor");
          } else if (userType === "company") {
            navigate("/company");
          }
          return res.json();
        } else {
          throw new Error("Email already exists");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="min-h-screen bg-white">
            <Formik
        initialValues={{
          userType: "",
          firstName: "",
          companyName: "",
          certOfIncorporation: null,
          idOfDirectors: null,
          companyKRA: null,
          directorsKRA: null,
          cr12: null,
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          userType: Yup.string().required("User Type is required"),
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          countryCode: Yup.string().required("Country Code is required"),
          phoneNumber: Yup.string().required("Phone Number is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          password: Yup.string().required("Password is required"),
          companyName: Yup.string().when("userType", {
            is: "company",
            then: Yup.string().required("Company Name is required"),
          }),
          certOfIncorporation: Yup.mixed().when("userType", {
            is: "company",
            then: Yup.mixed().required("Certificate of Incorporation is required"),
          }),
          idOfDirectors: Yup.mixed().when("userType", {
            is: "company",
            then: Yup.mixed().required("ID of Directors is required"),
          }),
          companyKRA: Yup.mixed().when("userType", {
            is: "company",
            then: Yup.mixed().required("Company KRA PIN is required"),
          }),
          directorsKRA: Yup.mixed().when("userType", {
            is: "company",
            then: Yup.mixed().required("Directors KRA PIN is required"),
          }),
          cr12: Yup.mixed().when("userType", {
            is: "company",
            then: Yup.mixed().required("CR12 is required"),
          }),
        })}
      ></Formik>
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto w-64 ">
          <h2 className="text-2xl ml-12 font-bold"> Sign Up Here</h2>
          <div className="flex flex-col mt-5">
  <button
    type="button"
    className={`bg-blue-800 text-white font-semibold py-2 px-4  rounded-t-lg rounded-b-lg ${
      userType === "investor" ? "bg-blue-600" : ""
    }`}
    onClick={() => setUserType("investor")}
  >
    Sign Up as an Investor
  </button>
  <button
    type="button"
    className={`bg-blue-800 text-white font-semibold py-2 px-4 mt-7 rounded-t-lg rounded-b-lg ${
      userType === "company" ? "bg-blue-600" : ""
    }`}
    onClick={() => setUserType("company")}
  >
    Sign Up Your Company
  </button>
</div>

          {userType && (
            <>
              {userType === "company" && (
                <>
                  <label htmlFor="companyName" className="block mt-4 font-semibold">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
  
                  <label htmlFor="certOfIncorporation" className="block mt-4 font-semibold">
                    Certificate of Incorporation
                  </label>
                  <input
                    id="certOfIncorporation"
                    name="certOfIncorporation"
                    type="file"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    onChange={(e) => setCertOfIncorporation(e.target.files[0])}
                  />
  
                  <label htmlFor="idOfDirectors" className="block mt-4 font-semibold">
                    ID of Directors
                  </label>
                  <input
                    id="idOfDirectors"
                    name="idOfDirectors"
                    type="file"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    onChange={(e) => setIdOfDirectors(e.target.files[0])}
                  />
  
                  <label htmlFor="companyKRA" className="block mt-4 font-semibold">
                    Company KRA PIN
                  </label>
                  <input
                    id="companyKRA"
                    name="companyKRA"
                    type="file"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    onChange={(e) => setCompanyKRA(e.target.files[0])}
                  />
  
                  <label htmlFor="directorsKRA" className="block mt-4 font-semibold">
                    Directors KRA PIN
                  </label>
                  <input
                    id="directorsKRA"
                    name="directorsKRA"
                    type="file"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    onChange={(e) => setDirectorsKRA(e.target.files[0])}
                  />
  
                  <label htmlFor="cr12" className="block mt-4 font-semibold">
                    CR12
                  </label>
                  <input
                    id="cr12"
                    name="cr12"
                    type="file"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    onChange={(e) => setCr12(e.target.files[0])}
                  />
                </>
              )}
              {userType === "investor" && (
                <>
                  <label htmlFor="firstName" className="block mt-4 font-semibold">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 rounded outline-offset-4 px-3 py-2 w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
  
                  <label htmlFor="lastName" className="block mt-4 font-semibold">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
  
                  <div className="flex items-center">
                    <div className="w-1/3">
                      <label htmlFor="countryCode" className="block mt-4 font-semibold">
                        Country Code
                      </label>
                      <select
                        id="countryCode"
                        name="countryCode"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        <option value="+1">+1 (United States)</option>
                        <option value="+44">+44 (United Kingdom)</option>
                        <option value="+254">+254 (Kenya)</option>
                        {/* Add more country codes here */}
                      </select>
                    </div>
  
                    <div className="w-2/3 mb-6 mt-10">
                      <label htmlFor="phoneNumber" className="block mt-4 font-semibold">
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="integer"
                        placeholder="Phone Number"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
  
              <label htmlFor="email" className="block mt-4 font-semibold">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text"></div>
  
              <label htmlFor="password" className="block mt-4 font-semibold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
  
              <button
                type="submit"
                className="mt-4 bg-blue-800 text-white font-semibold py-2 px-4 ml-16 rounded-full"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}  