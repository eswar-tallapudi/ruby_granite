import React from "react";
import { Link } from "react-router-dom";

import Input from "components/Input";
import Button from "components/Button";

const SignupForm = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  loading,
  setPasswordConfirmation,
}) => {
  return (
    <div
      className="bg-gray-50 flex min-h-screen items-center justify-center
    px-4 py-12 sm:px-6 lg:px-8 "
    >
      <div className="w-full max-w-md">
        <h2
          className="mt-6 text-center text-3xl font-extrabold
        leading-9 text-gray-700"
        >
          Sign Up
        </h2>
        <div className="text-center">
          <Link
            to="/"
            className="transition focus:outline-none mt-2 text-center
            text-sm font-medium text-bb-purple duration-150
            ease-in-out focus:underline"
          >
            Or Login Now
          </Link>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <Input
            label="Name"
            placeholder="Oliver"
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            label="Email"
            placeholder="oliver@example.com"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="********"
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="Password Confirmation"
            placeholder="********"
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
          <Button type="submit" buttonText="Register" loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
