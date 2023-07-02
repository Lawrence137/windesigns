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
    className={`bg-blue-800 text-white font-semibold py-2 transition delay-100 ease-in-out duration-300 hover:contrast-200 hover:drop-shadow-2xl px-4  rounded-t-lg rounded-b-lg ${
      userType === "investor" ? "bg-blue-600" : ""
    }`}
    onClick={() => setUserType("investor")}
  >
    Sign Up as an Investor
  </button>
  <button
    type="button"
    className={`bg-blue-800 text-white font-semibold py-2 px-4 transition delay-100 ease-in-out duration-300 hover:contrast-200 hover:drop-shadow-2xl mt-7 rounded-t-lg rounded-b-lg ${
      userType === "company" ? "bg-blue-600 " : ""
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
                        className="border border-gray-300 rounded px-3 mb-2 py-2 w-full"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
<option value="+1">+1 (United States)</option>
<option value="+44">+44 (United Kingdom)</option>
<option value="+254">+254 (Kenya)</option>
<option value="+93">+93 (Afghanistan)</option>
<option value="+355">+355 (Albania)</option>
<option value="+213">+213 (Algeria)</option>
<option value="+376">+376 (Andorra)</option>
<option value="+244">+244 (Angola)</option>
<option value="+1264">+1264 (Anguilla)</option>
<option value="+1268">+1268 (Antigua and Barbuda)</option>
<option value="+54">+54 (Argentina)</option>
<option value="+374">+374 (Armenia)</option>
<option value="+297">+297 (Aruba)</option>
<option value="+61">+61 (Australia)</option>
<option value="+43">+43 (Austria)</option>
<option value="+994">+994 (Azerbaijan)</option>
<option value="+1242">+1242 (Bahamas)</option>
<option value="+973">+973 (Bahrain)</option>
<option value="+880">+880 (Bangladesh)</option>
<option value="+1246">+1246 (Barbados)</option>
<option value="+375">+375 (Belarus)</option>
<option value="+32">+32 (Belgium)</option>
<option value="+501">+501 (Belize)</option>
<option value="+229">+229 (Benin)</option>
<option value="+1441">+1441 (Bermuda)</option>
<option value="+975">+975 (Bhutan)</option>
<option value="+591">+591 (Bolivia)</option>
<option value="+387">+387 (Bosnia and Herzegovina)</option>
<option value="+267">+267 (Botswana)</option>
<option value="+55">+55 (Brazil)</option>
<option value="+673">+673 (Brunei)</option>
<option value="+359">+359 (Bulgaria)</option>
<option value="+226">+226 (Burkina Faso)</option>
<option value="+257">+257 (Burundi)</option>
<option value="+855">+855 (Cambodia)</option>
<option value="+237">+237 (Cameroon)</option>
<option value="+1">+1 (Canada)</option>
<option value="+238">+238 (Cape Verde)</option>
<option value="+1345">+1345 (Cayman Islands)</option>
<option value="+236">+236 (Central African Republic)</option>
<option value="+235">+235 (Chad)</option>
<option value="+56">+56 (Chile)</option>
<option value="+86">+86 (China)</option>
<option value="+57">+57 (Colombia)</option>
<option value="+269">+269 (Comoros)</option>
<option value="+242">+242 (Congo)</option>
<option value="+682">+682 (Cook Islands)</option>
<option value="+506">+506 (Costa Rica)</option>
<option value="+225">+225 (Côte d'Ivoire)</option>
<option value="+385">+385 (Croatia)</option>
<option value="+53">+53 (Cuba)</option>
<option value="+599">+599 (Curaçao)</option>
<option value="+357">+357 (Cyprus)</option>
<option value="+420">+420 (Czech Republic)</option>
<option value="+243">+243 (Democratic Republic of the Congo)</option>
<option value="+45">+45 (Denmark)</option>
<option value="+253">+253 (Djibouti)</option>
<option value="+1767">+1767 (Dominica)</option>
<option value="+1809">+1809 (Dominican Republic)</option>
<option value="+593">+593 (Ecuador)</option>
<option value="+20">+20 (Egypt)</option>
<option value="+503">+503 (El Salvador)</option>
<option value="+240">+240 (Equatorial Guinea)</option>
<option value="+291">+291 (Eritrea)</option>
<option value="+372">+372 (Estonia)</option>
<option value="+251">+251 (Ethiopia)</option>
<option value="+500">+500 (Falkland Islands)</option>
<option value="+298">+298 (Faroe Islands)</option>
<option value="+679">+679 (Fiji)</option>
<option value="+358">+358 (Finland)</option>
<option value="+33">+33 (France)</option>
<option value="+689">+689 (French Polynesia)</option>
<option value="+241">+241 (Gabon)</option>
<option value="+220">+220 (Gambia)</option>
<option value="+995">+995 (Georgia)</option>
<option value="+49">+49 (Germany)</option>
<option value="+233">+233 (Ghana)</option>
<option value="+350">+350 (Gibraltar)</option>
<option value="+30">+30 (Greece)</option>
<option value="+299">+299 (Greenland)</option>
<option value="+1473">+1473 (Grenada)</option>
<option value="+590">+590 (Guadeloupe)</option>
<option value="+1671">+1671 (Guam)</option>
<option value="+502">+502 (Guatemala)</option>
<option value="+224">+224 (Guinea)</option>
<option value="+245">+245 (Guinea-Bissau)</option>
<option value="+592">+592 (Guyana)</option>
<option value="+509">+509 (Haiti)</option>
<option value="+504">+504 (Honduras)</option>
<option value="+852">+852 (Hong Kong)</option>
<option value="+36">+36 (Hungary)</option>
<option value="+354">+354 (Iceland)</option>
<option value="+91">+91 (India)</option>
<option value="+62">+62 (Indonesia)</option>
<option value="+98">+98 (Iran)</option>
<option value="+964">+964 (Iraq)</option>
<option value="+353">+353 (Ireland)</option>
<option value="+972">+972 (Israel)</option>
<option value="+39">+39 (Italy)</option>
<option value="+1876">+1876 (Jamaica)</option>
<option value="+81">+81 (Japan)</option>
<option value="+962">+962 (Jordan)</option>
<option value="+7">+7 (Kazakhstan)</option>
<option value="+254">+254 (Kenya)</option>
<option value="+686">+686 (Kiribati)</option>
<option value="+965">+965 (Kuwait)</option>
<option value="+996">+996 (Kyrgyzstan)</option>
<option value="+856">+856 (Laos)</option>
<option value="+371">+371 (Latvia)</option>
<option value="+961">+961 (Lebanon)</option>
<option value="+266">+266 (Lesotho)</option>
<option value="+231">+231 (Liberia)</option>
<option value="+218">+218 (Libya)</option>
<option value="+423">+423 (Liechtenstein)</option>
<option value="+370">+370 (Lithuania)</option>
<option value="+352">+352 (Luxembourg)</option>
<option value="+853">+853 (Macau)</option>
<option value="+389">+389 (Macedonia)</option>
<option value="+261">+261 (Madagascar)</option>
<option value="+265">+265 (Malawi)</option>
<option value="+60">+60 (Malaysia)</option>
<option value="+960">+960 (Maldives)</option>
<option value="+223">+223 (Mali)</option>
<option value="+356">+356 (Malta)</option>
<option value="+692">+692 (Marshall Islands)</option>
<option value="+596">+596 (Martinique)</option>
<option value="+222">+222 (Mauritania)</option>
<option value="+230">+230 (Mauritius)</option>
<option value="+262">+262 (Mayotte)</option>
<option value="+52">+52 (Mexico)</option>
<option value="+691">+691 (Micronesia)</option>
<option value="+373">+373 (Moldova)</option>
<option value="+377">+377 (Monaco)</option>
<option value="+976">+976 (Mongolia)</option>
<option value="+382">+382 (Montenegro)</option>
<option value="+1664">+1664 (Montserrat)</option>
<option value="+212">+212 (Morocco)</option>
<option value="+258">+258 (Mozambique)</option>
<option value="+95">+95 (Myanmar)</option>
<option value="+264">+264 (Namibia)</option>
<option value="+674">+674 (Nauru)</option>
<option value="+977">+977 (Nepal)</option>
<option value="+31">+31 (Netherlands)</option>
<option value="+599">+599 (Netherlands Antilles)</option>
<option value="+687">+687 (New Caledonia)</option>
<option value="+64">+64 (New Zealand)</option>
<option value="+505">+505 (Nicaragua)</option>
<option value="+227">+227 (Niger)</option>
<option value="+234">+234 (Nigeria)</option>
<option value="+683">+683 (Niue)</option>
<option value="+672">+672 (Norfolk Island)</option>
<option value="+850">+850 (North Korea)</option>
<option value="+1670">+1670 (Northern Mariana Islands)</option>
<option value="+47">+47 (Norway)</option>
<option value="+968">+968 (Oman)</option>
<option value="+92">+92 (Pakistan)</option>
<option value="+680">+680 (Palau)</option>
<option value="+970">+970 (Palestine)</option>
<option value="+507">+507 (Panama)</option>
<option value="+675">+675 (Papua New Guinea)</option>
<option value="+595">+595 (Paraguay)</option>
<option value="+51">+51 (Peru)</option>
<option value="+63">+63 (Philippines)</option>
<option value="+48">+48 (Poland)</option>
<option value="+351">+351 (Portugal)</option>
<option value="+1787">+1787 (Puerto Rico)</option>
<option value="+974">+974 (Qatar)</option>
<option value="+262">+262 (Réunion)</option>
<option value="+40">+40 (Romania)</option>
<option value="+7">+7 (Russia)</option>
<option value="+250">+250 (Rwanda)</option>
<option value="+590">+590 (Saint Barthélemy)</option>
<option value="+290">+290 (Saint Helena)</option>
<option value="+1869">+1869 (Saint Kitts and Nevis)</option>
<option value="+1758">+1758 (Saint Lucia)</option>
<option value="+590">+590 (Saint Martin)</option>
<option value="+508">+508 (Saint Pierre and Miquelon)</option>
<option value="+1784">+1784 (Saint Vincent and the Grenadines)</option>
<option value="+685">+685 (Samoa)</option>
<option value="+378">+378 (San Marino)</option>
<option value="+239">+239 (São Tomé and Príncipe)</option>
<option value="+966">+966 (Saudi Arabia)</option>
<option value="+221">+221 (Senegal)</option>
<option value="+381">+381 (Serbia)</option>
<option value="+248">+248 (Seychelles)</option>
<option value="+232">+232 (Sierra Leone)</option>
<option value="+65">+65 (Singapore)</option>
<option value="+1721">+1721 (Sint Maarten)</option>
<option value="+421">+421 (Slovakia)</option>
<option value="+386">+386 (Slovenia)</option>
<option value="+677">+677 (Solomon Islands)</option>
<option value="+252">+252 (Somalia)</option>
<option value="+27">+27 (South Africa)</option>
<option value="+82">+82 (South Korea)</option>
<option value="+211">+211 (South Sudan)</option>
<option value="+34">+34 (Spain)</option>
<option value="+94">+94 (Sri Lanka)</option>
<option value="+249">+249 (Sudan)</option>
<option value="+597">+597 (Suriname)</option>
<option value="+268">+268 (Swaziland)</option>
<option value="+46">+46 (Sweden)</option>
<option value="+41">+41 (Switzerland)</option>
<option value="+963">+963 (Syria)</option>
<option value="+886">+886 (Taiwan)</option>
<option value="+992">+992 (Tajikistan)</option>
<option value="+255">+255 (Tanzania)</option>
<option value="+66">+66 (Thailand)</option>
<option value="+670">+670 (Timor-Leste)</option>
<option value="+228">+228 (Togo)</option>
<option value="+690">+690 (Tokelau)</option>
<option value="+676">+676 (Tonga)</option>
<option value="+1868">+1868 (Trinidad and Tobago)</option>
<option value="+216">+216 (Tunisia)</option>
<option value="+90">+90 (Turkey)</option>
<option value="+993">+993 (Turkmenistan)</option>
<option value="+1649">+1649 (Turks and Caicos Islands)</option>
<option value="+688">+688 (Tuvalu)</option>
<option value="+256">+256 (Uganda)</option>
<option value="+380">+380 (Ukraine)</option>
<option value="+971">+971 (United Arab Emirates)</option>
<option value="+598">+598 (Uruguay)</option>
<option value="+998">+998 (Uzbekistan)</option>
<option value="+678">+678 (Vanuatu)</option>
<option value="+379">+379 (Vatican City)</option>
<option value="+58">+58 (Venezuela)</option>
<option value="+84">+84 (Vietnam)</option>
<option value="+681">+681 (Wallis and Futuna)</option>
<option value="+967">+967 (Yemen)</option>
<option value="+260">+260 (Zambia)</option>
<option value="+263">+263 (Zimbabwe)</option>
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