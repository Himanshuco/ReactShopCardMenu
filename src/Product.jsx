import Price from "./Price";
import "./Product.css";

function Product({title , idx}){
    let oldPrices = ["12,495","11,9000","1,599","599"];
    let newPrices = ["8,999","9,1999","899","278"];
    let description=["This is a Logitech MX Master","This is a Apple Pencil" , "This is a Acer Aspire laptop" , "This is a Coreman book"];
    return(
        <>
            <div className="Product">
                <p>{title}</p>
                <p>{description[idx]}</p>
                <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
            </div>
        </>
    )
}

export default Product;