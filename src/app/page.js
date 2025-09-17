import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[50vh] w-full flex flex-col gap-2 items-center justify-center bg-primary rounded-2xl my-10">
      <Image
        src="/images/Infoocean-Logo.png"
        alt="Infoocean Logo"
        width={1000}
        height={1000}
        className="h-5 md:h-10 w-auto"
      />
      <p className="text-secondary w-[60%] text-center">Home Page is Under Development..!</p>
    </main>
  );
}
