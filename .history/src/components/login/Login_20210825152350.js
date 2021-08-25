import React from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import Header from "../header/Header";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("email"));
  return (
    <div className="container">
      <Header />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Page</h1>
        <input placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
