import { SignInButton } from "@clerk/nextjs"

function Signin() {
  return (
  <SignInButton mode="modal">
    <button className="text-sm font-semibold hover:text-darkColor hoverEffect text-lightColor cursor-pointer">
        Login
    </button>
  </SignInButton>
  )
}

export default Signin