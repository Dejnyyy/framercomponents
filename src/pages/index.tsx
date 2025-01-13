import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swipe Up Marketing</title>
        <meta name="description" content="Swipe Up Marketing Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="relative flex flex-col items-center text-center">
          {/* Glowing Background Behind "UP" */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full bg-green-400 blur-3xl opacity-20"></div>
          </div>

          {/* 3D Glassy "UP" Text with Glow */}
          <div className="relative text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            <span
              className="drop-shadow-[0_0_20px_rgba(0,255,128,0.8)] filter brightness-125"
            >
              UP
            </span>
            {/* Arrow Above */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full drop-shadow-[0_0_20px_rgba(0,255,128,0.8)]"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>
          </div>

          {/* Glowing Background Behind Description */}
          <div className="absolute  w-[400px] h-[200px] bg-blue-500 rounded-2xl blur-2xl opacity-10"></div>
          {/* Glassmorphic Text Container */}
          <div className="relative mt-10 p-8 rounded-2xl bg-white/10 text-white max-w-lg shadow-lg backdrop-blur-md drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            <h2 className="text-4xl font-bold drop-shadow-[0_0_15px_rgba(0,255,128,0.8)]">
              SWIPE UP
            </h2>
            <p className="mt-4 text-lg">
              Marketingová agentura, která v tom s námi jede od začátku!
              Specializuje se na tvorbu obsahu i výkonnostní marketing.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
