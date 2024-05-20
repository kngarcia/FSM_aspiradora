export function Menu({onStart}) 
{
    return(
        <div className="menu-fondo">
            <h1>Aspiradora Automática</h1>
            <div className="menu-options">
                <MenuButton label="Start" onClick={onStart}/>
                <MenuButton label="Config" onClick={onStart}/>
            </div>
            
        </div>

    )

}
export function MenuButton ({label, onClick})
{
    return(
        <button onClick={onClick}>{label}</button>
    )
}