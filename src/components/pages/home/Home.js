import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BasketItem from "../basket/basketitem";
import {fetchProducts} from "../../../redux/actions";


const Home = () => {

    const dispatch = useDispatch()

    const {products,error,loading} = useSelector(s => s)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    if(loading){
        return <h1 className="text-4xl">loading...</h1>
    }
    if (error){
        return <h1 className="text-4xl">{error}</h1>
    }
    return (
        <div className="container p-6 my-auto">
            <h1 className="text-center text-4xl  my-4">My products</h1>
            <div className="flex flex-row flex-wrap my-auto">
                {
                    products.map(el=>(
                        <BasketItem el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;