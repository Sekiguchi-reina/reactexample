import React,{useState,useEffect} from 'react';

// コンポーネント作成　名前はGreeting 名前を受け取ってHelloと表示

<Greeting name = "John" /> //親コンポーネントでpropsを指定して
function Greeting(props){ //子コンポーネントに名前を渡す
    return <div>Hello,{props.name}!</div>
    // name = "太郎";
    // render(){
    //     return <h1>Hello! {this.name}</h1>
    }


// ボタンを押すとカウンターの値が1増えるコンポーネント
class Count extends React.Component{
    constructor(props){
        super(props);
        // setInterval(function(){this.counter++;},1000);
        this.state = {
            counter: 0
        }
    }

    doit = ()=>{
        this.setState({counter:this.state.counter + 1});
    }

    render(){
        return(
            <div className ="alert alert -primary">
                <h2>Counter</h2>
                <p>COUNT : {this.state.counter } times. </p>
                <button className ="btn btn-primary" 
                    onClick={this.doit}>
                </button>
            </div>
        );
    };
}


// 名前入れて送信するとその名前がアラートで出る
function NameForm(){
    const [name,setName] = useState('');
    
    const handleChange = (event) =>{
        setName(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('Hello,' + name);
    }
    return(
        <form onSubmit = {handleSubmit}>
            <label>
                Name:
                <input type = "text" value={name} onChange = {handleChange}/>
            </label>
            <button type = "submit">Submit</button>
        </form>
    );
}
// マウントされたときに毎秒カウントを1増やすタイマーを開始、アンマウントされたらタイマークリア

function Timer(){
    const[count,setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return() =>{
            clearInterval(timer);
        };
    },[])

    return(
        <div>
            <h2>Timer : {}</h2>
        </div>
    )
}

//ToDoリスト

function ToDoList(){
    const[tasks,setTasks] = useState([]);
    const[filter,setFilter] = useStare('all');

    const addTask = (task) => {
        setTasks([...tasks, {id: Date.now(), text: task,completed: false}]);
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? {...task,completed: !task.completed} :task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter)
    }
}


export default App;