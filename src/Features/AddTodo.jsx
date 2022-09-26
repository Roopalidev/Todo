import { useState,  useContext} from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { context} from "../TodoProvider"

export default function AddTodos(){
    const [todoValue, setVal] = useState("");
    const {addTodo } = useContext(context);
    const onKeyPressHandler = (e) => {
        if(e.charCode === 13){
            addTodo(todoValue);
        }
        
    }

    const onChangeHandler = (e) => {
        setVal(e.target.value);
    }
    return(
        <>
        <div className="text">
            <TextField 
            onKeyPress={onKeyPressHandler}
            value={todoValue}
            onChange={onChangeHandler}
            placeholder="Things to be done..."
            //size="30"
            />
       </div>
        <div className="col-md-3 col-sm-4 mt-5">
            <Button
            onClick={() => {
                addTodo(todoValue);
                setVal("")
                
            }}
             
           className="btn btn-primary pointer float-right "
          
            value="Add Todo" />
           
        </div>
        </>
    )
}