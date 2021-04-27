import {Link} from 'react-router-dom'
import "./LoggedInHeader.css"

const LoggedInHeader = () =>{
    return(
        <div class="header">
            <Link to='./membersndues'>Members and dues</Link>
            <Link to='./sensitivedata'>Sensitive Data</Link>
            <Link to='./nextmeeting'>Next Meeting</Link>
            <Link to='./gallery'>Gallery</Link>
        </div>
    )
}

export default LoggedInHeader