import React from "react";
import Header from "../header/Header";
import { useForm } from "react-hook-form";

function Signup(props) {
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
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Signup Page</h1>
        <input placeholder="Name" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <input
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <input
          placeholder="Your age"
          {...register("age", { required: true })}
        />
        {errors.age && <span>This field is required</span>}
        <input
          placeholder="Committee"
          {...register("committee", { required: true })}
        />
        {errors.committee && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
