import { useState} from "react";
import "./App.css";
import Header from "./components/Header"
import TodoList from "./Features/TodoList";
import AddTodo from "./Features/AddTodo"
import TodoProvider from "./TodoProvider"
function App(){
    return(
        
        <TodoProvider>
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <Header />
                        <div className="row gx-0 pt-2">
                            <AddTodo  />
                        </div>
                        
                            <TodoList />
                            
                            
                    
                    </div>
                </div>
            </div>
        </TodoProvider>
      
    )
}
export default App;