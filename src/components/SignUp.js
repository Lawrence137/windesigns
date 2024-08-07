import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SignUp = () => {
  const [showForm, setShowForm] = useState(false);

  const validationSchema = Yup.object().shape({
    loanAmount: Yup.number().required("Loan amount is required"),
    passport: Yup.mixed().required("Passport is required"),
    kraPin: Yup.string().required("KRA PIN is required"),
    residence: Yup.mixed().required("Proof of residence is required"),
    bankStatement: Yup.mixed().required("Bank/Mpesa statement is required"),
  });

  const handleSubmit = (values) => {
    fetch({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          alert("Your application is being processed.");
          return res.json();
        } else {
          throw new Error("An Error Occurred");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignUpClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {!showForm ? (
        <div className="container mx-auto w-64">
          <div className="flex flex-col mt-5">
            <button
              type="button"
              className="bg-blue-800 text-white font-semibold py-2 px-4 mt-7 rounded-t-lg rounded-b-lg"
              onClick={handleSignUpClick}
            >
              SIGN UP YOUR COMPANY
            </button>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            loanAmount: "",
            passport: "",
            kraPin: "",
            residence: "",
            bankStatement: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="container mx-auto w-64">
            <label htmlFor="loanAmount" className="block mt-4 font-semibold">
              Loan Amount
            </label>
            <Field
              id="loanAmount"
              name="loanAmount"
              type="text"
              placeholder="Loan Amount"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage
              name="loanAmount"
              component="div"
              className="text-red-500"
            />

            <label htmlFor="passport" className="block mt-4 font-semibold">
              ID/Passport
            </label>
            <Field
              id="passport"
              name="passport"
              type="file"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage
              name="passport"
              component="div"
              className="text-red-500"
            />

            <label htmlFor="kraPin" className="block mt-4 font-semibold">
              KRA PIN
            </label>
            <Field
              id="kraPin"
              name="kraPin"
              type="text"
              placeholder="KRA PIN"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage
              name="kraPin"
              component="div"
              className="text-red-500"
            />

            <label htmlFor="residence" className="block mt-4 font-semibold">
              Proof of Residence
            </label>
            <Field
              id="residence"
              name="residence"
              type="file"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage
              name="residence"
              component="div"
              className="text-red-500"
            />

            <label htmlFor="bankStatement" className="block mt-4 font-semibold">
              6 Months Bank/Mpesa Statements
            </label>
            <Field
              id="bankStatement"
              name="bankStatement"
              type="file"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <ErrorMessage
              name="bankStatement"
              component="div"
              className="text-red-500"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-800 text-white font-semibold py-2 px-4 ml-16 rounded-full"
            >
              APPLY NOW
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};
