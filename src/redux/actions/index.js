import {
    ADD_TO_BASKET,
    ADD_TO_WISHLIST,
    DECREASE_FROM_BASKET,
    DELETE_FROM_BASKET, FETCH_ONE_PRODUCT_SUCCESS, FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS
} from "../types/types";
import axios from "axios";
import {useDispatch} from "react-redux";

export const addToBasket = (data) =>{
    return  {type: ADD_TO_BASKET,payload:data}
}

export const decreaseFromBasket = (id) =>{
    return {type:DECREASE_FROM_BASKET,payload:id}
}

export const removeFromBasket = (id) =>{
    return {type:DELETE_FROM_BASKET,payload:id}
}


export const addToWishlist = (data) =>{
    return {type:ADD_TO_WISHLIST,payload:data}
}

export const fetchProducts = () => async(dispatch) =>{
    try {
         dispatch({type:FETCH_PRODUCTS_LOADING})
        // const response = await axios('https://fakestoreapi.com/products/1')
        const response = await axios('https://fakestoreapi.com/products/')

        setTimeout(()=>{
             dispatch({type:FETCH_PRODUCTS_SUCCESS, payload: response.data})

        },1000)

    }catch (e){
        console.log(e)
        dispatch({type:FETCH_PRODUCTS_ERROR,payload: "ошибка получения данных !!!"})

    }
}

export const fetchOneProduct = (id) => async (dispatch) =>{
    try {
        dispatch({type:FETCH_PRODUCTS_LOADING})
        const response = await axios(`https://fakestoreapi.com/products/${id}`)
        await dispatch({type:FETCH_ONE_PRODUCT_SUCCESS,payload:response.data})
    } catch (e){
        dispatch({type:FETCH_PRODUCTS_ERROR,payload: "ошибка получения данных !!!"})
    }
}