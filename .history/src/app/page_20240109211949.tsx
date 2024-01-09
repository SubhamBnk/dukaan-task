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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g opacity="0.8">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2972 1.98737C14.1119 1.19626 13.4057 0.625 12.5804 0.625H7.41988L7.28896 0.629913L7.15288 0.645423L7.01906 0.671421C6.22795 0.856753 5.65669 1.56287 5.65669 2.38819V2.60323H4.19453L4.0445 2.60717C2.70315 2.67794 1.61426 3.69145 1.61426 4.96848V17.0098L1.6187 17.1505C1.69821 18.4071 2.83563 19.375 4.19453 19.375H15.8058L15.9558 19.3711C17.2972 19.3003 18.3861 18.2868 18.3861 17.0098V4.96848L18.3816 4.82771C18.3021 3.57113 17.1647 2.60323 15.8058 2.60323H14.3436V2.38819L14.3387 2.25726L14.3232 2.12119L14.2972 1.98737ZM14.3436 3.89336V4.10837C14.3436 4.93369 13.7724 5.63981 12.9813 5.82514L12.8474 5.85114L12.7114 5.86665L12.5804 5.87156H7.41988C6.59457 5.87156 5.88845 5.3003 5.70311 4.5092L5.67712 4.37537L5.66161 4.2393L5.65669 4.10837V3.89336H4.19453C3.50904 3.89336 2.97107 4.33572 2.91015 4.86776L2.9044 4.96848V17.0098C2.9044 17.5516 3.40204 18.0259 4.06781 18.0798L4.19453 18.0849H15.8058C16.4913 18.0849 17.0292 17.6425 17.0902 17.1105L17.0959 17.0098V4.96848C17.0959 4.42661 16.5983 3.95238 15.9325 3.89846L15.8058 3.89336H14.3436ZM7.67764 1.61411H12.3227C12.7697 1.61411 13.1592 1.90084 13.3005 2.31864L13.3305 2.42573L13.3487 2.53612L13.3548 2.64625L13.3542 3.86708L13.3452 3.98931L13.324 4.10085L13.287 4.21899C13.1783 4.50363 12.9484 4.72443 12.6589 4.8251L12.5477 4.85711L12.4314 4.87652L12.3227 4.88246L7.66091 4.88191L7.53868 4.87291L7.42713 4.85165L7.309 4.81468C7.02436 4.70593 6.80356 4.47604 6.70288 4.18656L6.67087 4.07533L6.65146 3.95905L6.64553 3.85031L6.64607 2.62948L6.65508 2.50725L6.67633 2.39571L6.7133 2.27757C6.82206 1.99293 7.05194 1.77213 7.34142 1.67146L7.45265 1.63945L7.56893 1.62004L7.67764 1.61411Z" fill="white"/>
                    <path d="M5.46309 10.5959C5.93831 10.5959 6.32356 10.2107 6.32356 9.73547C6.32356 9.26025 5.93831 8.875 5.46309 8.875C4.98786 8.875 4.60262 9.26025 4.60262 9.73547C4.60262 10.2107 4.98786 10.5959 5.46309 10.5959Z" fill="white"/>
                    <path d="M8.04453 8.9485C7.6125 8.9485 7.26228 9.29872 7.26228 9.73075C7.26228 10.1628 7.6125 10.513 8.04453 10.513H14.6154C15.0474 10.513 15.3976 10.1628 15.3976 9.73075C15.3976 9.29872 15.0474 8.9485 14.6154 8.9485H8.04453Z" fill="white"/>
                    <path d="M7.26231 14.1522C7.26231 13.7202 7.61254 13.3699 8.04456 13.3699H14.6154C15.0474 13.3699 15.3977 13.7202 15.3977 14.1522C15.3977 14.5842 15.0474 14.9344 14.6154 14.9344H8.04456C7.61254 14.9344 7.26231 14.5842 7.26231 14.1522Z" fill="white"/>
                     <path d="M5.46312 15.0174C5.93834 15.0174 6.32359 14.6321 6.32359 14.1569C6.32359 13.6817 5.93834 13.2964 5.46312 13.2964C4.98789 13.2964 4.60265 13.6817 4.60265 14.1569C4.60265 14.6321 4.98789 15.0174 5.46312 15.0174Z" fill="white"/>
                   </g>
                 </svg>
                <p className='text-[14px]'>Orders</p>
          </div>
          
          <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <g opacity="0.8">
                       <path d="M17.0807 10.8332C17.7711 10.8332 18.3307 11.3928 18.3307 12.0832V17.0832C18.3307 17.7735 17.7711 18.3332 17.0807 18.3332H12.0807C11.3904 18.3332 10.8307 17.7735 10.8307 17.0832V12.0832C10.8307 11.3928 11.3904 10.8332 12.0807 10.8332H17.0807ZM7.9165 10.8332C8.60686 10.8332 9.1665 11.3928 9.1665 12.0832V17.0832C9.1665 17.7735 8.60686 18.3332 7.9165 18.3332H2.9165C2.22615 18.3332 1.6665 17.7735 1.6665 17.0832V12.0832C1.6665 11.3928 2.22615 10.8332 2.9165 10.8332H7.9165ZM16.914 12.2498H12.2473V16.9165H16.914V12.2498ZM7.74984 12.2498H3.08317V16.9165H7.74984V12.2498ZM7.9165 1.6665C8.60686 1.6665 9.1665 2.22615 9.1665 2.9165V7.9165C9.1665 8.60686 8.60686 9.1665 7.9165 9.1665H2.9165C2.22615 9.1665 1.6665 8.60686 1.6665 7.9165V2.9165C1.6665 2.22615 2.22615 1.6665 2.9165 1.6665H7.9165ZM17.0807 1.6665C17.7711 1.6665 18.3307 2.22615 18.3307 2.9165V7.9165C18.3307 8.60686 17.7711 9.1665 17.0807 9.1665H12.0807C11.3904 9.1665 10.8307 8.60686 10.8307 7.9165V2.9165C10.8307 2.22615 11.3904 1.6665 12.0807 1.6665H17.0807ZM7.74984 3.08317H3.08317V7.74984H7.74984V3.08317ZM16.914 3.08317H12.2473V7.74984H16.914V3.08317Z" fill="white"/>
                   </g>
                </svg>
                <p className='text-[14px]'>Products</p>
          </div>
          

         <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <g opacity="0.8">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833496 3.03682C0.833496 2.65216 1.14397 2.34033 1.52695 2.34033H13.0813C13.4643 2.34033 13.7748 2.65216 13.7748 3.03682V13.0945C13.7748 13.4791 13.4643 13.791 13.0813 13.791H1.52695C1.14397 13.791 0.833496 13.4791 0.833496 13.0945V3.03682ZM2.2204 3.73331V12.398H12.3879V3.73331H2.2204Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3879 6.90518C12.3879 6.52052 12.6983 6.20869 13.0813 6.20869H16.1625C16.3464 6.20869 16.5228 6.28207 16.6528 6.41269L18.9637 8.73369C19.0938 8.8643 19.1668 9.04146 19.1668 9.22618V13.0945C19.1668 13.4792 18.8564 13.791 18.4734 13.791L13.0813 13.791C12.6984 13.791 12.3879 13.4792 12.3879 13.0945V6.90518ZM13.7748 7.60167V12.398H17.7799V9.51467L15.8753 7.60167H13.7748Z" fill="white"/>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99322 13.791C4.31265 13.791 3.76094 14.3451 3.76094 15.0286C3.76094 15.7122 4.31265 16.2663 4.99322 16.2663C5.67379 16.2663 6.2255 15.7122 6.2255 15.0286C6.2255 14.3451 5.67379 13.791 4.99322 13.791ZM2.37404 15.0286C2.37404 13.5758 3.54668 12.398 4.99322 12.398C6.43975 12.398 7.6124 13.5758 7.6124 15.0286C7.6124 16.4815 6.43975 17.6593 4.99322 17.6593C3.54668 17.6593 2.37404 16.4815 2.37404 15.0286Z" fill="white"/>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0071 13.791C14.3265 13.791 13.7748 14.3451 13.7748 15.0286C13.7748 15.7122 14.3265 16.2663 15.0071 16.2663C15.6876 16.2663 16.2393 15.7122 16.2393 15.0286C16.2393 14.3451 15.6876 13.791 15.0071 13.791ZM12.3879 15.0286C12.3879 13.5758 13.5605 12.398 15.0071 12.398C16.4536 12.398 17.6262 13.5758 17.6262 15.0286C17.6262 16.4815 16.4536 17.6593 15.0071 17.6593C13.5605 17.6593 12.3879 16.4815 12.3879 15.0286Z" fill="white"/>
                   </g>
                </svg>
                <p className='text-[14px]'>Delivery</p>
          </div>
          
          <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g opacity="0.8">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1074 2.29084C13.0654 1.76834 14.2333 2.46167 14.2333 3.55281V16.4471C14.2333 17.5383 13.0653 18.2316 12.1074 17.7091L4.04696 13.3125H2.375C1.23591 13.3125 0.3125 12.3891 0.3125 11.25V8.74999C0.3125 7.6109 1.23591 6.68749 2.375 6.68749H4.04692L12.1074 2.29084ZM12.6083 3.86866L5.06662 7.9823V12.0176L12.6083 16.1313V3.86866ZM1.9375 8.74999C1.9375 8.50836 2.13338 8.31249 2.375 8.31249H3.4375V11.6875H2.375C2.13338 11.6875 1.9375 11.4916 1.9375 11.25V8.74999Z" fill="white"/>
                      <path d="M18.6387 5.32573C18.919 5.67613 18.8622 6.18743 18.5118 6.46775L16.4284 8.13442C16.078 8.41474 15.5667 8.35793 15.2864 8.00753C15.0061 7.65713 15.0629 7.14583 15.4133 6.86551L17.4966 5.19884C17.847 4.91852 18.3583 4.97533 18.6387 5.32573Z" fill="white"/>
                      <path d="M15.5041 10.0208C15.5041 9.57208 15.8679 9.20831 16.3166 9.20831H18.8583C19.307 9.20831 19.6708 9.57208 19.6708 10.0208C19.6708 10.4695 19.307 10.8333 18.8583 10.8333H16.3166C15.8679 10.8333 15.5041 10.4695 15.5041 10.0208Z" fill="white"/>
                      <path d="M16.4284 12.2822C16.078 12.0019 15.5667 12.0587 15.2864 12.4091C15.0061 12.7595 15.0629 13.2708 15.4133 13.5511L17.4966 15.2178C17.847 15.4981 18.3583 15.4413 18.6387 15.0909C18.919 14.7405 18.8622 14.2292 18.5118 13.9489L16.4284 12.2822Z" fill="white"/>
                    </g>
                 </svg>
                <p className='text-[14px]'>Marketing</p>
          </div>
          
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g opacity="0.8">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.6626 10.9376C2.6626 10.5096 3.00958 10.1626 3.4376 10.1626H7.8126C8.24062 10.1626 8.5876 10.5096 8.5876 10.9376C8.5876 11.3656 8.24062 11.7126 7.8126 11.7126H4.2126V16.5626C4.2126 16.9906 3.86562 17.3376 3.4376 17.3376C3.00958 17.3376 2.6626 16.9906 2.6626 16.5626V10.9376Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.4126 16.5626C1.4126 16.1346 1.75958 15.7876 2.1876 15.7876H17.8126C18.2406 15.7876 18.5876 16.1346 18.5876 16.5626C18.5876 16.9906 18.2406 17.3376 17.8126 17.3376H2.1876C1.75958 17.3376 1.4126 16.9906 1.4126 16.5626Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0376 7.1876C7.0376 6.75958 7.38458 6.4126 7.8126 6.4126H12.1876C12.6156 6.4126 12.9626 6.75958 12.9626 7.1876C12.9626 7.61562 12.6156 7.9626 12.1876 7.9626H8.5876V16.5626C8.5876 16.9906 8.24062 17.3376 7.8126 17.3376C7.38458 17.3376 7.0376 16.9906 7.0376 16.5626V7.1876Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4126 3.4376C11.4126 3.00958 11.7596 2.6626 12.1876 2.6626H16.5626C16.9906 2.6626 17.3376 3.00958 17.3376 3.4376V16.5626C17.3376 16.9906 16.9906 17.3376 16.5626 17.3376H12.1876C11.7596 17.3376 11.4126 16.9906 11.4126 16.5626V3.4376ZM12.9626 4.2126V15.7876H15.7876V4.2126H12.9626Z" fill="white"/>
                    </g>
                 </svg>
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
