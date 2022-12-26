import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, decreaseFromBasket, removeFromBasket} from "../../../redux/actions";

const Basket = () => {
    const basket = useSelector(s => s.basket)
    const dispatch = useDispatch()
    return (
        <div className="container p-9">
            <h1 className="text-4xl my-4">Basket products</h1>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="   w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="  bg-black text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="bg-gray-600">
                        <th scope="col" className="py-3 px-6 bg-black">
                            Product name
                        </th>
                        <th scope="col" className="py-3 px-6 bg-black   ">
                            image
                        </th>
                        <th scope="col" className="py-3 px-6 bg-black">
                            quantity
                        </th>
                        <th scope="col" className="py-3 px-6 bg-black">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6 bg-black ">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>

                    <tbody>

                    {
                        basket.map(el =>(
                            <tr className="bg-black border-b dark:bg-gray-800 dark:border-gray-700 ">
                                <th scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white">
                                    {el.title}
                                </th>
                                <td className="py-4 px-6 text-white">
                                    <img style={{
                                        width: "35px"
                                    }} src={el.image} alt=""/>
                                </td>
                                <td className="py-4 px-6 text-white">
                                    <button onClick={()=>dispatch(addToBasket(el))} className="font-bold text-2xl text-blue-600 dark:text-blue-500 hover:underline">+</button>
                                 <span className="m-2">  {el.quantity}</span>
                                    <button

                                        onClick={() => dispatch(decreaseFromBasket(el.id))} className={`font-bold text-2xl  ${el.quantity === 1? "text-gray-600": "text-red-600"} hover:underline`}>-</button>

                                </td>
                                <td className="py-4 px-6 text-white">
                                    {el.price * el.quantity}
                                </td>
                                 <td className="py-4 px-6 text-right">
                                     <button
                                         onClick={() => {
                                             return dispatch(removeFromBasket(el.id));
                                         }}

                                         className="font-medium text-red-600 text-2xl dark:text-red-500 hover:underline">&times;</button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Basket;