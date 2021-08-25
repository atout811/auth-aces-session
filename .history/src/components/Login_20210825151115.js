import React from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import Header from "./header/Header";
import { useForm } from "react-hook-form";

function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Header />
      <div className="form"></div>
    </div>
  );
}

export default Login;
