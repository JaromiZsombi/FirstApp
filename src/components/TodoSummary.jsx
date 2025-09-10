

export const TodoSummary =({todos})=>{
    const hossz = todos.length
    console.log("hossz",hossz)
    const kesz = todos.filter(obj=>obj.isDone)
    return(
        <div className="d-flex justify-content-between">
            <label htmlFor="">Összesen:{hossz}</label>
            <label htmlFor="">Kész:{kesz.length}</label>
        </div>
    )
}