import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[50vh] w-full flex flex-col gap-2 items-center justify-center bg-primary rounded-2xl my-10">
      <Image
        src="/images/Infoocean-Logo.png"
        alt="Infoocean Logo"
        width={150}
        height={40}
        className="h-10 w-auto"
      />
      <p className="text-secondary">Page is Under Development..!</p>
    </main>
  );
}
