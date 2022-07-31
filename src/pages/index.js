import Head from "next/head";
import HomePage from "./HomePage";
import Demo from "./demo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Design & Development Company - eLuminous Technologies</title>
        <meta
          name="description"
          content="Hire Angular Developers to have seamless visulizations across all devices and help you to build high performace scalable apps to enhance productivity by 70%."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      <Demo />
    </>
  );
}
