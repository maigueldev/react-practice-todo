function Resume({ completedTodos, totalTodos }) {
    return (
        <>
            <div className='resume'>
                Has completado { completedTodos } de { totalTodos } TODOs
            </div>
        </>
    )
}

export { Resume }
