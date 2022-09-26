import Button from "../components/Button"
import { useContext } from "react"
import {context} from "../TodoProvider"
export default function Todo({todo,id}){
const { deleteTodo,completeTodo } = useContext(context);
return (
    
    <p className="todo"
    style={{textDecoration:todo.isCompleted? "line-item-action" : ""}}
    key={id}
    
    >
    <span onClick={() => completeTodo(id)}>{todo.text}</span>
    
    <Button 
    onClick={() => {
        deleteTodo(id)

    }}
    className="btn btn-danger pointer float-right mr-4 mt-1"
    value="Delete"
    
    />
    </p>
    
    
)
}