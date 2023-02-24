import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex justify-center bg-blue-200">
        <NavBarItem title="NBA" param="nba"/>
        <NavBarItem title="NFL" param="nfl"/>
        <NavBarItem title="NHL" param="nhl"/>
    </div>
  )
};

export default NavBar;