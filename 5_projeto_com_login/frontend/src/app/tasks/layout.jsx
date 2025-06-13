import NavBar from "@/components/NavBar"

const NavBarLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default NavBarLayout