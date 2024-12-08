import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title= "Task Tracker", onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
       <h1 >{title}</h1>
       {location.pathname === '/' && (
        <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}
       />
      )}
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

//CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header