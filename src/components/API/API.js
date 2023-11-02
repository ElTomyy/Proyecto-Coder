import { useState } from 'react'
import { db } from '../../config/firebase'
import { collection, getDocs, where, query, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"

const itemsCollectionRef = collection(db, "Items")
const cartCollectionRef = collection(db, "Cart")


const getItemList = async (search) => {

    if (search == "") {
        const data = await getDocs(itemsCollectionRef)
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        return filteredData
    }
    else {
        const q = query(itemsCollectionRef, where("Categoria", "==", search));
        const data = await getDocs(q);

        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));

        return filteredData
    }
}

const updateCartList = (Element) => {

    addDoc(cartCollectionRef, {Nombre: Element.Nombre, Precio: Element.Precio, Url: Element.Url, Stock: Element.Stock, id: Element.id})

}

const getCartList = async () => {

    const data = await getDocs(cartCollectionRef)
    const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))

    return filteredData
}

const deleteItemCart = async (id) => {

    const ItemRef = doc(db, "Cart", id)
    deleteDoc(ItemRef)
}

function buyCart(Collection) {

    const data = Collection.docs.map( async (doc) => {
        const ItemDoc = doc(db, "Cart", doc.id)
        await updateDoc(ItemDoc, { Stock: (doc.Stock - 1) })
    })

    return data
}

export {getItemList, getCartList, deleteItemCart, buyCart, updateCartList}
