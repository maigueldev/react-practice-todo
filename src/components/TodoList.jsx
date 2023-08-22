function TodoList({ todos }) {
    return (
        <>
            <div className="container-list">
                <div className="list-item">
                    <div className="list-item-left">
                        <div className="list-item-left-checkbox">V</div>
                        <div className="list-item-left-text">Create a todo app</div>
                    </div>
                    <div className="list-item-right">
                        <div className="list-item-right-icon">X</div>
                    </div>
                </div>
            </div>
        </>
    )
}
// Quede aqui en renderizar los todos!
export { TodoList }
