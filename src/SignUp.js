import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-yellow-700">
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto w-64 ">
          <h2 className="text-2xl ml-12 font-bold"> Sign Up Here</h2>
          <div className="flex justify-around mt-5">
            <button
              type="button"
              className="bg-blue-800 text-white font-semibold py-2 px-4 mr-6 rounded-t-lg rounded-b-lg"
              onClick={() => setUserType("investor")}
            >
              Sign Up as an Investor
            </button>
            <button
              type="button"
              className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-t-lg rounded-b-lg"
              onClick={() => setUserType("company")}
            >
              Sign Up Your Company
            </button>
          </div>
          {userType && (
            <>
              {userType === "company" && (
                <>
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
  
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="Certificate of Incorporation"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={certOfIncorporation}
                    onChange={(e) => setCertOfIncorporation(e.target.value)}
                  />
  
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="ID of Directors"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={idOfDirectors}
                    onChange={(e) => setIdOfDirectors(e.target.value)}
                  />
  
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="Company KRA PIN"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={companyKRA}
                    onChange={(e) => setCompanyKRA(e.target.value)}
                  />
  
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="Directors KRA PIN"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={directorsKRA}
                    onChange={(e) => setDirectorsKRA(e.target.value)}
                  />
  
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="CR12"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={cr12}
                    onChange={(e) => setCr12(e.target.value)}
                  />
                </>
              )}
              {userType === "investor" && (
                <>
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
  
                  <label
                    htmlFor="exampleInputPassword1"
                    className="block mt-4 font-semibold"
                  ></label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
  
                  <div className="flex items-center">
                    <div className="w-1/3">
                      <label
                        htmlFor="countryCode"
                        className="block mt-4 font-semibold"
                      ></label>
                      <select
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
                      <input
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
  
              <label
                htmlFor="exampleInputEmail1"
                className="block mt-4 font-semibold"
              ></label>
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text"></div>
  
              <label
                htmlFor="exampleInputPassword1"
                className="block mt-4 font-semibold"
              ></label>
              <input
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