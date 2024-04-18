interface Props {
    ipAddress: string;
    location: string;
    timeZone: string;
    isp: string;
  }
  
  const IPDetails: React.FC<Props> = ({ ipAddress, location, timeZone, isp }) => {
  return (
    <div className="flex flex-col lg:flex-row w-4/5 gap-4 bg-slate-50 md:top-52 md:left-20 z-10
    sm:flex-row container md:gap-10 p-4 md:p-8
    absolute top-48 left-10 lg:left-28 shadow-lg rounded-lg">
    
        <div className="flex flex-col items-center w-full lg:border lg:border-r-gray-400 lg:border-l-0
        lg:border-b-0 lg:border-t-0">
            <p className="text-[0.6em] font-bold text-gray-400">IP ADDRESS</p>
            <p className="font-bold text-gray-800">{ipAddress}</p>
        </div>

        <div className="flex flex-col items-center w-full lg:border lg:border-r-gray-400 lg:border-l-0
        lg:border-b-0 lg:border-t-0">
            <p className="text-[0.6em] font-bold text-gray-400">LOCATION</p>
            <p className="font-bold text-gray-800">{location}</p>
        </div>
        <div className="flex flex-col items-center w-full lg:border lg:border-r-gray-400 lg:border-l-0
        lg:border-b-0 lg:border-t-0">
            <p className="text-[0.6em] font-bold text-gray-400">TIMEZONE</p>
            <p className="font-bold text-gray-800">{timeZone}</p>
        </div>
        <div className="flex flex-col items-center w-full lg:border lg:border-r-gray-400 lg:border-l-0
        lg:border-b-0 lg:border-t-0">
            <p className="text-[0.6em] font-bold text-gray-400">ISP</p>
            <p className="font-bold text-gray-800">{isp}</p>
            </div>
   

    </div>
  )
}

export default IPDetails