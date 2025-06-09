import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/logo.png"
          alt="Next.js logo"
          width={340}
          height={38}
          priority
        />
        <div className="flex  w-full flex-col md:flex-row justify-center items-center">
          <a
            href="https://discord.gg/pafh7dut"
            target="_blank"
            className="mr-4 text-[#8D153A] mt-4 md:mt-0 font-bold shadow-md hover:shadow-md p-2 rounded-md bg-slate-100 cursor-pointer flex items-center"
            data-aos="fade-up"
          >
            Join Discord
          </a>
        </div>
      </main>
    </div>
  );
}
