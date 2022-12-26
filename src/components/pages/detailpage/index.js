import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneProduct} from "../../../redux/actions";

const DetailPage = () => {
    const {productsId} = useParams()
    const dispatch = useDispatch()
    const {singleProduct:details,error,loading} = useSelector(s => s)
    useEffect(()=>{
        dispatch(fetchOneProduct(productsId))
    },[])

    if(loading){
        return <h1 className="text-4xl">loading...</h1>
    }
    if (error){
        return <h1 className="text-4xl">{error}</h1>
    }
    return (
        <div className="container">
            <div className="flex flex-row flex-wrap p-40">
                <div className="basis-1/2">
                    <img src={details.image} alt=""/>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-4xl">{details.title}</h1>
                    <p>{details.description}</p>
                    <button>add to cart</button>

                </div>
            </div>
        </div>
    );
};

export default DetailPage;