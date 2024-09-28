const completeArea = {
    border: "2px solid #aacfd0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#c9dede"
}
export const CompleteTodos = (props) => {
    const { completeTodos, onReturnTodo } = props;
    return (
        <div style={completeArea} >
            <p className='title'>完了のTODO</p>
            <ul>
                {completeTodos.map((complete, index) => (
                    <li key={complete}>
                        <div className='list-row'>
                            <p className='todo-item'>{complete}</p>
                            <button onClick={() => onReturnTodo(index)}>戻す</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}