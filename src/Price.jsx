function Price({oldPrice , newPrice}){
    let oldStyle = {
        textDecorationLine :"line-through",
    }
    let newStyle = {
        fontWeight:"bold"
    }
    let styles = {
        backgroundColor:"#e0c367",
        height:"30px",
        width:"250px",
        borderBottomLeftRadius :"14px",
        borderBottomRightRadius :"14px",

    }
    return (
        <div  style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}

export default Price;