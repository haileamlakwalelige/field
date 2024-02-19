import React from 'react'

const AddToCartIntro = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[70vh]'>
        <p className='roboto font-bold text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] text-center py-5 pb-10'>Add to Cart</p>
        <form className='flex flex-col justify-center items-center gap-5'>
            <div>
                <p className='font-semibold roboto mb-4'>Name on card</p>
                <input type='text' className='min-w-[300px] lg:min-w-[600px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px]' />
            </div>
            <div className='mt-5'>
                <p className='font-semibold roboto mb-4'>Card number</p>
                <input type='text' className='min-w-[300px] lg:min-w-[600px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px]' />
            </div>
            <div className='flex justify-center gap-5'>
            <div className='mt-5'>
                <p className='font-semibold roboto mb-4'>Expiry date </p>
                {/* <input type='text' className='min-w-[200px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px]' /> */}
                <select className='min-w-[200px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px] border-[#F2D050] border-2 pl-2'>
                    <option className='min-w-[200px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px] ml-2'>1 Year</option>
                    <option className='min-w-[200px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px] ml-2'>1 Month</option>
                    <option className='min-w-[200px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px] ml-2'>1 Week</option>
                    <option className='min-w-[200px] bg-[#F2D050] rounded-3xl py-2 min-h-[50px] ml-2'>1 Day</option>
                </select>
            </div>
            <div className='mt-5'>
                <p className='font-semibold roboto mb-4'>CVV:</p>
                <input type='text' className='min-w-[400px]  bg-[#F2D050] rounded-3xl py-2 min-h-[50px]' />
            </div>
            </div>
            <div>
                <button type='submit' className='flex mt-10 text-white py-2 px-20 font-semibold bg-[#846640] text-[20px] md:text-[22px] lg:text-[24px] rounded-xl'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddToCartIntro