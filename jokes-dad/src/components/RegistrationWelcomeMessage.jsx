import React from "react";

export default function RegistrationWelcomeMessage({ isRegistered }) {
  return (
    <>
      {!isRegistered ? null : (
        <div>Thanks for registering :) You can now login</div>
      )}
    </>
  );
}
