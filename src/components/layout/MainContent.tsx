import Todo from "../Todo.tsx";
import {Route, Routes} from "react-router-dom";

export default function MainContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Todo title="TodoList" />}> </Route>
                <Route path="/home" element={<h1>HI home</h1>}> </Route>
                <Route path="/about"
                       element={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae distinctio dolor
                           error, esse in nam nemo omnis perspiciatis quidem quod sequi sit totam unde.</p>}> </Route>

            </Routes>
        </main>
    )
}
