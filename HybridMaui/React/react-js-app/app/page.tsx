"use client";

import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Hello, world!</h1>

      <p>
        Do you want to <Link href="/game">play a game</Link>?
      </p>

      <em>
        Welcome to your new app running on <b>{process.env.BUILD_TYPE}</b> using <b>Your Browser</b>.
      </em>

    </>
  );
}

export default Home;
