import {useContext} from "react";
import {AuthContext} from "./App.tsx";
import {NavLink} from "react-router-dom";

export default function Sidebar({logOut}: { logOut: () => void }) {
    const user = useContext(AuthContext);
    return (
        <aside>
            <nav>
                <NavLink className={'btn'} to="/"> Todos </NavLink>
                <NavLink className={'btn'} to="/home"> Home </NavLink>
                <NavLink className={'btn'} to="/about"> About </NavLink>
            </nav>
            <div className="user-profile">
                <p>Logged in as: {user?.username} </p>
                <br />
                <button  className='btn' onClick={logOut}>Logout</button>
            </div>
        </aside>
    )
}
