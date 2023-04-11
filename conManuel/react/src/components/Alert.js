function Alert ({msg, type}) {
    const classname = `alert alert--${type} (alt+96 -> BACK TIC)`
    return (
        <div className = {classname}>
            {msg}
            </div>
    )
}

export default Alert;