

const OrderList = () => {
  return (
    <div className='grid grid-cols-4 gap-10 px-3 py-3.5 border-b-2 border-gray-200'>
            <div className='flex justify-start items-start'><p className='text-[15px] font-[500] text-blue-400'>#281209</p></div>
            <div className='flex justify-start items-center'>
            <p className='text-[15px] text-[#4D4D4D] font-[500]'>7 July, 2023</p>
            </div>
            <div className='flex justify-end items-end'><p className='text-[15px] font-[500]'>&#x20B9;1728.23</p></div>
            <div className='flex justify-end items-center'>
                <p className='text-[15px] text-[#4D4D4D] font-[500]'>&#x20B9;22</p>
            </div>
    </div>
  )
}

export default OrderList