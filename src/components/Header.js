import PropTypes from 'prop-types'
import Button from './Button'

function Header({title, onAdd, showAdd}) {

    const clickHandler = ()=>{

        alert('hello world')

    }


    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAdd ? 'X' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd}/>
            
        </header>
    )
}

Header.defaultProps = {
    title : "Task Tracker"
}

Header.propTypes = {
    title : PropTypes.string
}

export default Header