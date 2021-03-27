import './mainPage.css'
import {Link} from 'react-router-dom'

const Main =()=>
{
    return(
        <div>
            <img class='login' src='https://cdn.shopify.com/s/files/1/0077/8027/0133/files/Black_Eye_600p.png?height=628&pad_color=fff&v=1575250533&width=1200' alt='Logo' title='logo'/>
            <div class='login' id='login'>
            <br/>
            <label for="username">Username:</label>
            <br/>
            <input type="text" id="username" name="username"/>
            <br/>
            <label for="password">Password:</label>
            <br/>
            <input type="text" id="password" name="password"/>
            <br/>
            <button type="button">Login</button> 
            <br/>
            <Link to='./public'>Public data</Link>
            </div>
            <div>
                Register Username
                <br/>
            <label for="usernameReg">Username:</label>
            <br/>
            <input type="text" id="usernameReg" name="usernameReg"/>
            <br/>
            <label for="passwordReg">Password:</label>
            <br/>
            <input type="text" id="passwordReg" name="passwordReg"/>
            <br/>
            <button type="button">Register</button> 
            <br/>
            </div>
            <br/>
            <div id='mainTxt'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis tincidunt augue, pellentesque consectetur velit euismod congue. Aenean placerat lacus eu fringilla maximus. Donec enim ipsum, sagittis ac ultrices eu, molestie et felis. Donec eu ex nec mauris consequat euismod quis in tortor. Sed sagittis pharetra massa, ut laoreet erat venenatis in. Pellentesque commodo, turpis in vehicula condimentum, tellus sapien ornare massa, vitae tristique eros ante id mauris. Morbi a nulla non sapien fringilla malesuada.

                Pellentesque tempor nec risus eget commodo. Nullam vitae venenatis erat. Morbi pellentesque diam enim, vel molestie leo elementum in. Sed fermentum pretium pulvinar. Nullam diam sapien, consectetur in enim id, posuere suscipit lorem. Fusce maximus orci ut neque iaculis, a lacinia nisl placerat. Suspendisse sit amet mauris quis nisi aliquam porta. Integer cursus maximus magna, eu fringilla augue suscipit faucibus. Donec gravida ante malesuada, luctus augue eu, semper dolor. Aenean vel luctus odio. Nullam auctor orci quis eros interdum, ut ullamcorper odio ullamcorper. Phasellus posuere ut enim at tincidunt. Vestibulum lobortis molestie urna, quis dapibus dolor dignissim at. Nam vitae venenatis odio. Duis tincidunt porttitor leo, at porta augue volutpat ac. 
            </div>
        </div>
    )
}

export default Main