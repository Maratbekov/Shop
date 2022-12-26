import {ADD_TO_BASKET, ADD_TO_WISHLIST, DECREASE_FROM_BASKET, DELETE_FROM_BASKET,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_LOADING,FETCH_PRODUCTS_ERROR,FETCH_ONE_PRODUCT_SUCCESS} from "../types/types";

const initialState = {
    products: [],
    singleProduct:{},
    error: null,
    loading: false,
    basket: [],
    wishlist: []
}


export const Reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_PRODUCTS_LOADING:{
            return {...state,loading: true,error: null,products: []}
        }

        case FETCH_PRODUCTS_SUCCESS:{
            return {...state,loading: false,error: null,products: payload}
        }
        case FETCH_ONE_PRODUCT_SUCCESS:{
            return {...state,loading: false,error: null,singleProduct: payload}
        }
        case FETCH_PRODUCTS_ERROR:{
            return {...state,loading: false,error: payload,products: []}
        }
        case ADD_TO_BASKET: {
            // return {...state,basket: [...state.basket,payload]}
            const foundProduct = state.basket.find(el => el.id === payload.id)
            if (foundProduct) {
                return {
                    ...state,
                    basket: state.basket.map(el => el.id === payload.id ? {...el, quantity: el.quantity + 1} : el)
                }
            }
            return {...state, basket: [...state.basket, {...payload, quantity: 1}]}
        }
        case DECREASE_FROM_BASKET:{
            return {
                ...state,
                basket: state.basket.map(el =>{
                    if (el.id === payload){
                        if (el.quantity > 1){
                            return {...el,quantity: el.quantity -1}
                        }else {
                            return el
                        }
                    }
                })
            }
        }
        case DELETE_FROM_BASKET: {
            return {...state, basket: state.basket.filter(el => el.id !== payload)}
        }
        case ADD_TO_WISHLIST: {
            // return {...state, wishlist: [...state.wishlist, payload]}
            const foundProduct = state.wishlist.find(el => el.id === payload.id)
            if (foundProduct){
                return {...state,wishlist: state.wishlist.map(el=>{
                    if (el.id === payload.id){
                        // el.isLiked = false
                        return{...el,isLiked: !el.isLiked}
                    }else {
                        return el
                    }
                    })}
            }else {
                return {...state,wishlist: [...state.wishlist,{...payload,isLiked: true}]}
            }
        }
        default:
            return state
    }
}
