import React, { useContext } from 'react'
import myContext from '../../context/myContext';
function UpdateOrder() {
    const context = useContext(myContext);
    const { order, setorder, updateorder,} = context
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Order Status</h1>
                    </div>
                    <div>
                        <input type="text"
                            onChange={(e) => setorder({ ...order, name: e.target.value })} value={order.name}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='User Name'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            onChange={(e) => setorder({ ...order, adress: e.target.value })} value={order.adress}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Order adress'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            onChange={(e) => setorder({ ...order, number: e.target.value })} value={order.number}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Phone number'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            onChange={(e) => setorder({ ...order, pincode: e.target.value })} value={order.pincode}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='pincode'
                        />
                    </div>
                    <div>
                       
                        <select value={order.status} onChange={(e) => {setorder({ ...order, status: e.target.value })}} className="px-4 py-4 mb-10 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" >        
                                    {/* <option key={'waiting for picking'} value={'waiting for picking'}>waiting for picking</option>    */}
                                    <option key={'picking in progress'} value={'picking in progress'}>picking in progress</option>
                                    <option key={'Picking completed'} value={'Picking completed'}>Picking completed</option>
                              
                                    <option key={'Packing in progress'} value={'Packing in progress'}>Packing in progress</option>  
                                    <option key={'Packing completed'} value={'Packing completed'}>Packing in progress</option>  
                                    <option key={'Order completed'} value={'Order completed'}>Order completed</option>
                        </select>
                        
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button onClick={updateorder}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Update Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateOrder