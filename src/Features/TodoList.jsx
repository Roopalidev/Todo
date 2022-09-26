import { useContext } from "react"
import Todo from "./Todo"
import {context} from "../TodoProvider"
export default function TodoList({}){
    const { todos } = useContext(context)
    return (
        <div className="row-md-1 justify-content-center mt-4">
            <ul className="list-group">
            {todos.map((todo,index) => {
                return (
                <Todo 
               
                key={index} 
                 
                id={index} 
                todo={todo} 
                />
            );
            })}
            </ul>
        </div>
    )
}