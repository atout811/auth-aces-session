import React from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import Header from "../header/Header";
import { useForm } from "react-hook-form";

function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("email"));
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="Email" {...register("email", { required: true })} />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="Password"
          {...register("Password", { required: true })}
        />
        {/* errors will return when field validation fails  */}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
