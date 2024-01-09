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
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b] '>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.8">
    <path d="M16.9398 18.75H13.0675C12.7165 18.75 12.3797 18.6111 12.1307 18.3636C11.8816 18.1162 11.7407 17.7802 11.7385 17.4292V12.1622H8.22722V17.4292C8.22505 17.7802 8.08407 18.1162 7.83507 18.3636C7.58606 18.6111 7.24925 18.75 6.89818 18.75H3.02593C2.62123 18.75 2.2331 18.5892 1.94693 18.3031C1.66077 18.0169 1.5 17.6288 1.5 17.2241V7.99465C1.50032 7.75707 1.55611 7.52284 1.66293 7.31062C1.76975 7.0984 1.92465 6.91405 2.11529 6.77227L9.15426 1.55457C9.41825 1.35686 9.73919 1.25 10.069 1.25C10.3988 1.25 10.7198 1.35686 10.9837 1.55457L17.8832 6.76406C18.0665 6.91176 18.2136 7.09945 18.3131 7.31275C18.4126 7.52605 18.462 7.75931 18.4575 7.99465V17.2241C18.4586 17.4241 18.4201 17.6223 18.3443 17.8074C18.2686 17.9925 18.1569 18.1608 18.0159 18.3026C17.8749 18.4444 17.7072 18.5569 17.5225 18.6337C17.3378 18.7105 17.1398 18.75 16.9398 18.75ZM13.1496 17.3553H16.9562C16.9896 17.3532 17.0209 17.3385 17.0438 17.3141C17.0666 17.2897 17.0793 17.2575 17.0793 17.2241V7.99465C17.08 7.97543 17.0758 7.95635 17.0672 7.93915C17.0586 7.92195 17.0458 7.90718 17.03 7.89621L10.1141 2.68671C10.0911 2.67119 10.064 2.6629 10.0362 2.6629C10.0084 2.6629 9.98128 2.67119 9.95825 2.68671L2.92748 7.90441C2.91051 7.91673 2.89653 7.93271 2.88659 7.95117C2.87664 7.96964 2.87099 7.99011 2.87006 8.01106V17.2241C2.87006 17.2589 2.88389 17.2923 2.9085 17.3169C2.93312 17.3415 2.96651 17.3553 3.00132 17.3553H6.80794V12.0228C6.81009 11.6905 6.94303 11.3725 7.17796 11.1376C7.41289 10.9027 7.73091 10.7697 8.06314 10.7676H11.878C12.0439 10.7665 12.2084 10.7981 12.3621 10.8606C12.5158 10.9231 12.6557 11.0153 12.7737 11.1318C12.8918 11.2484 12.9858 11.387 13.0503 11.5399C13.1148 11.6928 13.1485 11.8569 13.1496 12.0228V17.3553Z" fill="white"/>
  </g>
</svg>
                <p className='text-[14px]'>Home</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/orders.png"  width={20} height={20}/>
                <p className='text-[14px]'>Orders</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/products.png" width={20} height={20}/>
                <p className='text-[14px]'>Products</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/delivery.png" width={20} height={20}/>
                <p className='text-[14px]'>Delivery</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/marketing.png"  width={20} height={20}/>
                <p className='text-[14px]'>Marketing</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/analytics.png"  width={20} height={20}/>
                <p className='text-[14px]'>Analytics</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/payments.png"  width={20} height={20}/>
                <p className='text-[14px]'>Payments</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/tools.png"  width={20} height={20}/>
                <p className='text-[14px]'>Tools</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <Image src="/discounts.png"  width={20} height={20}/>
                <p className='text-[14px]'>Discounts</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Image src="/audience.png" width={20} height={20}/>
                <p className='text-[14px]'>Audience</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Image src="/appearance.png"  width={20} height={20}/>
                <p className='text-[14px]'>Appearance</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
            <Image src="/plugins.png"  width={15} height={15} />
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
