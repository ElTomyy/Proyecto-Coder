import CartItems from "../CartItems/CartItems";
import {getCartList} from "../API/API"
import { useState, useEffect } from "react";
import { upload } from "@testing-library/user-event/dist/upload";

function GetCartItems() {

    const [data, setData] = useState([]);
    const [UpDate, SetUpdate] = useState(0)

    const ReLoadCarrito = (confirmation) => {
        if(confirmation) {
            console.log("Mensaje Recibido")
            SetUpdate(UpDate + 1)
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const cartList = await getCartList();
                setData(cartList);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        }

        fetchData();
        console.log(`ejecucion numero ${UpDate}`)
    }, [UpDate]); // Empty dependency array to run the effect only once

    return <CartItems doc={data} ReLoadCarrito={ReLoadCarrito}/>;
}

export default GetCartItems;