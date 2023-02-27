import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex justify-center bg-blue-200">
        <NavBarItem title="Standings" param="standings"/>
        <NavBarItem title="Scores" param="scores"/>
        <NavBarItem title="Statistics" param="statistics"/>
    </div>
  )
};

export default NavBar;