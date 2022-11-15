import React, { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prevState) => {
      const { name, type, value, checked } = e.target;

      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  const fetchData = async () => {
    const data = await JSON.stringify(loginData);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "appplication/json",
      },
      body: data,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/auth/login`,
      options
    );

    console.log("Response", response);

    return response;
  };

  return (
    <section className="px-4">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-gradient-to-tl from-orange-600 to-violet-600 max-w-md p-6 rounded-lg shadow-md shadow-white/10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4">
            <div className="">
              <label
                htmlFor="email"
                className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="pl-2 rounded-lg"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={loginData.email}
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="pl-2 rounded-lg"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={loginData.password}
              />
            </div>
            <div className="mx-auto">
              <button
                type="submit"
                className="rounded-md text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 hover:ring hover:ring-green-600 hover:ring-offset-2 hover:ring-offset-violet-600 px-4 py-1 font-bold mt-2">
                <p className="w-full flex items-center justify-center gap-2">
                  <span>Login</span>
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { LoginForm };
