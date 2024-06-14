import Link from "next/link"

const AppHeader = () => {
  return (
    <div className="bg-black w-full text-white font-semibold flex flex-col sm:flex-row justify-center items-center gap-x-2 p-1 text-center sm:text-left">
      <span className="mb-1 sm:mb-0">Sign up and get 20% off your first order.</span>
      <Link href="/auth/register" className="text-lg underline sm:ml-2">Sign Up Now</Link>
    </div>
  )
}

export default AppHeader
