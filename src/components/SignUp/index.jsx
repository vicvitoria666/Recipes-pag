import React from "react";
export default function SignUp() {
  return (
    <>
    <form onSubmit={e=>e.preventDefault()}>

        <h4>SUBSCRIBE</h4>
        <p>Sign up for newsletter</p>
        <input type="text" placeholder="Your Email"/>
        <button>SUBMIT</button>

    </form>
    </>
  );
}
