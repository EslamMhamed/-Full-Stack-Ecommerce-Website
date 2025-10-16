import Container from "./Container"
import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"

function Header() {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between " >
        {/* Logo */}
        <Logo />

        {/* NavButton */}
        <HeaderMenu />

        {/* NavAdmin */}
        <div>
          other
        </div>
      </Container>
    </header>
  ) 
}

export default Header