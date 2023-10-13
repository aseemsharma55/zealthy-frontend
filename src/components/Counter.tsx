import React,{useState} from "react"
interface IState{
    count:number

}

interface IPROPS {}

const Counter: React.FC = () => {
    const [state,setState] = useState<IState>({count:0});
    
    //add-increment
    const handleIncrement = () => {
        setState({count : state.count + 1})
    }
    //decrement-minus
    const handleDecrement = () => {
        setState({count : state.count - 1})
    }

    return (
        <>
        <h1>Event Handling</h1>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="display-3">{state.count}</h2>
                        <button className="btn btn-success ms-3" 
                        onClick={handleIncrement}>Badhao</button>
                        <button className="btn btn-danger ms-3"
                        onClick={handleDecrement}>Ghatao</button>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

export default Counter