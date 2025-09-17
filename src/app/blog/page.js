import Image from "next/image";
import React from 'react'

const page = () => {
  return (
     <main className="h-[50vh] w-full flex flex-col gap-2 items-center justify-center bg-primary rounded-2xl my-10">
          <Image
            src="/images/Infoocean-Logo.png"
            alt="Infoocean Logo"
            width={1000}
            height={1000}
            className="h-5 md:h-10 w-auto"
          />
          <p className="text-secondary w-[60%] text-center">Blog Page is Under Development..!</p>
        </main>
  )
}

export default page
