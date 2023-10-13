import React,{useState} from "react";

interface IState{
    name:String,
    title:String
}

interface IPROPS{
    name:String,
    email:String,
    description:String
}

let Customer:React.FC<IPROPS> = ({name,email,description}) => {
    const [state,setState] = useState<IState>({name: 'Aseem', title:'Mern Stack'})
    return(
    <>
        <div>
            <h1>Customer Component</h1>
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
            <h5>Description : {description}</h5>
        </div>
        <div className="col-md-6 card">
            <h1>Values From State</h1>
            <h4>Name : {state.name}</h4>
            <h4>Title : {state.title}</h4>
        </div>
    
    
    </>
        
    )
}

export default Customer