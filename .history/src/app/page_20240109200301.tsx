import OrderList from '@/components/OrderList'
import {  ArrowDown, ArrowDownToLine, ArrowUpDown, BadgePercent, BarChartBig, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, CreditCard, HelpCircle, HomeIcon, Info, LayoutGrid, MousePointer2, Palette, Search, Truck, Users, Volume2, Wallet, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const ordersToRender = [];

    for (let i = 0; i < 15; i++) {
      ordersToRender.push(<OrderList key={i} />);
    }

  return (
    <div className='grid grid-cols-6 bg-white '>
      <div className='bg-[#353C53] h-100 px-2.5 py-4 text-white relative'>
          {/* Logo and Name */}
          <div className='flex gap-3'>
            <div>
              <Image src='/logo.png' alt='Nishyan' className='rounded-md' width={50} height={50}/>
            </div>
            <div className='flex flex-col gap-1 justify-start items-start w-2/3'>
              <p className='text-[15px]'>
                Nishyan</p>
              <p className='text-[13px] underline underline-offset-2'>Visit Store</p>
            </div>
            <div className='flex items-center'>
              <ChevronDown className='h-7 w-7 font-bold'/>
            </div>
          </div>

          {/* Navigation List */}
          <div className='mt-6 gap-1'>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <HomeIcon className='w-5 h-5'/>
                <p className='text-[14px]'>Home</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <ClipboardList className='w-5 h-5'/>
                <p className='text-[14px]'>Order</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <LayoutGrid className='w-5 h-5'/>
                <p className='text-[14px]'>Products</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Truck className='w-5 h-5'/>
                <p className='text-[14px]'>Delivery</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Volume2 className='w-5 h-5'/>
                <p className='text-[14px]'>Marketing</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <BarChartBig className='w-5 h-5'/>
                <p className='text-[14px]'>Analytics</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <CreditCard className='w-5 h-5'/>
                <p className='text-[14px]'>Payments</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <MousePointer2 className='w-5 h-5'/>
                <p className='text-[14px]'>Tools</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <BadgePercent className='w-5 h-5'/>
                <p className='text-[14px]'>Discounts</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Users className='w-5 h-5'/>
                <p className='text-[14px]'>Audience</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Palette className='w-5 h-5'/>
                <p className='text-[14px]'>Appearance</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Zap className='w-5 h-5'/>
                <p className='text-[14px]'>Plugins</p>
              </div>
              
          </div>

          {/* Available Credits */}
          <div className='absolute bottom-2 flex items-center mb-2 w-[90%]'>
            <div className='flex px-3 py-2 bg-[#465071] rounded-md w-full'>
              <div className='p-2 bg-[#5a658c] rounded-md'>
                <Wallet className='w-6 h-6'/>
              </div>
              <div className='pl-3 w-full'>
                <p className='text-[13px]'>Available Credits</p>
                <p className='text-[16px]'>222.10</p>
              </div>
            </div>
          </div>
      </div>

      {/* Dashboard Navbar*/}
      <div className='col-span-5'>
        {/* Navbar */}
        <div className='grid grid-cols-3 gap-4 py-4 px-8 items-center border-b-2 border-gray-200'>
            <div className='flex gap-4 w-auto'>
              <p className='text-[15px] font-md'>Payments</p>
              <div className='flex items-center gap-2 w-auto'>
                <HelpCircle className='text-gray-400 w-4 h-4'/>
                <p className='text-sm font-sm text-gray-400'> How it works?</p>
              </div>
            </div>
            <div className='flex gap-4 w-auto items-center bg-gray-100 px-4 py-2'>
              <Search className='text-gray-400 w-5 h-5'/>
              <p className='text-[15px] text-gray-400'>Search features, tutorial, etc.</p>
            </div>
            <div className='flex gap-4 w-auto justify-end'>
              <div className='rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center'>
              <Image src='./Group.svg' alt="group" width={20} height={20}/>
              </div>
              <Image src='./Menu.svg' alt="menu" width={40} height={40}/>
            </div>
        </div>

        {/* Main content */}
        <div className='flex flex-col px-6 py-4'>
          <div>
            {/* Overview Layer */}
            <div className='flex justify-between'>
              <p className='text-[20px] text-semibold'>Overview</p>
              <div className='px-2 py-1 rounded-sm flex border border-gray-300 items-center'>
                <p className='text-[15px] text-[#4D4D4D]'>Last Month</p>
                <ChevronDown className='text-gray-400 h-5 w-5'/>
              </div>
            </div>
            {/* Orders Layer */}
            <div className='grid grid-cols-2 gap-5 mt-6'>
              <div className='p-5 flex flex-col gap-4 drop-shadow-md'>
                <div><p className='text-[16px] text-[#4D4D4D]'>Online Orders</p></div>
                <div><p className='text-4xl'>231</p></div>
              </div>
              <div className='p-5 flex flex-col gap-4 drop-shadow-md'>
                <div><p className='text-[16px] text-[#4D4D4D]'>Amount received</p></div>
                <div><p className='text-4xl'>₹23,92,312.19</p></div>
              </div>
            </div>
          </div>

          {/* Transactions section */}
          <div className='mt-8 flex flex-col'>
            <div className='w-auto'>
              <p className='text-[20px] font-[500]'>Transactions | This Month</p>
            </div>

            {/* Order Details */}
            <div className='mt-5 p-3'>
                {/* Search Sort and Download Section */}
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3'>
                      <div className='flex justify-between w-full'>
                        <div className='flex flex-start py-2.5 px-4 border border-gray-200 rounded-md w-[248px]'>
                          <Search className='text-gray-400 w-5 h-5'/>
                          <p className='text-[15px] text-gray-400 pl-2'>Search by order ID...</p>
                        </div>
                        {/* Sort Icon */}
                        <div className='flex flex-start items-center py-2.5 px-4 border border-gray-200 rounded-md '>
                          <p className='text-[16px] text-[#4D4D4D]'>Sort</p>
                          <ArrowUpDown className='text-[#4D4D4D] w-5 h-5 pl-1'/>
                        </div>
                      </div>
                      
                      {/* Download Icon  */}
                      <div className='flex flex-start items-center py-2.5 px-4 border border-gray-200 rounded-md '>
                        <ArrowDownToLine className='text-[#4D4D4D] w-5 h-5'/>
                      </div>
                    </div>

                    {/* Table Header */}
                    <div className='py-2.5 px-3 grid grid-cols-4 gap-10 rounded-md bg-[#F2F2F2]'>
                      <div className='flex justify-start items-start'><p className='text-[15px] font-[500]'>Order ID</p></div>
                      <div className='flex justify-start items-center'>
                        <p className='text-[15px] text-[#4D4D4D] font-[500]'>Order Date</p>
                        <ChevronDown className='text-[#4D4D4D] w-5 h-5 ml-1'/>
                      </div>
                      <div className='flex justify-end items-end'><p className='text-[15px] font-[500]'>Order Amount</p></div>
                      <div className='flex justify-end items-center'>
                        <p className='text-[15px] text-[#4D4D4D] font-[500]'>Transaction Fees</p>
                        <Info className='text-[#4D4D4D] w-4 h-4 ml-1'/>
                      </div>
                    </div>

                    {/* Orders List */}
                    <div>
                      {ordersToRender}
                    </div>

                    {/* Pagination */}
                    <div className='mt-1 flex items-center justify-center gap-6'>
                        {/* Previous Icon*/}
                        <div className='flex flex-start items-center py-2 px-3 border border-gray-200 hover:bg-blue-500 hover:text-white rounded-md'>
                          <ChevronLeft className=' w-5 h-5 pr-1'/>
                          <p className='text-[14px] '>Previous</p>
                        </div>
                        <div className='flex gap-1'>
                            <div className='py-2 px-4 hover:bg-blue-500 hover:text-white rounded-md'><p>1</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>...</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>10</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>11</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>12</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>13</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>14</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>15</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>16</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>17</p></div>
                            <div className='py-2 px-3 hover:bg-blue-500 hover:text-white rounded-md'><p>18</p></div>
                        </div>
                        <div className='flex flex-start items-center py-2 px-3 border border-gray-200 hover:bg-blue-500 hover:text-white rounded-md '>
                          <p className='text-[14px] '>Next</p>
                          <ChevronRight className='w-5 h-5 pl-1'/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
