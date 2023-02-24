import { BiBasketball }  from 'react-icons/bi';

function Header() {
  return (
    <div>
        <div className="header-content-left flex items-center p-5 bg-orange-200">
            <BiBasketball className='h-10 w-10'/>
            <h1 className='ml-5 underline'>Sports Scores</h1>
        </div>
    </div>
  )
}

export default Header;