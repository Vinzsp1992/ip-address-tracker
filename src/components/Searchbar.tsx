import { Dispatch, SetStateAction, useState } from 'react';
import icon_arrow from '../assets/icon-arrow.svg'

interface Props {
  setIPAddress: Dispatch<SetStateAction<string>>;
  fetchLocation: (ipAddress: string) => void;
}

const Searchbar: React.FC<Props> = ({setIPAddress, fetchLocation}) => {
    const [ipAddress, setIpAddress] = useState<string>('');

    const handleClick = () =>{
      setIPAddress(ipAddress);
      fetchLocation(ipAddress);
    }
  return (
    <div className="h-2/5 min-w-full search-container bg-cover flex flex-col gap-5
    justify-center items-center">
        <h1 className="text-white font-semibold text-lg">IP Address Tracker</h1>
        <div className="flex gap-1">
        <input 
        type='text'
        placeholder="Search for any IP Address or domain"
        onChange={(e) => setIpAddress(e.target.value)}
        className="p-3 w-[60vw] rounded-md border-input h-full bg-background ring-offset-background
        focus-visible:outline-none placeholder:text-muted-foreground"
         />
        <div className='bg-black w-14 h-full flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer'
        onClick={handleClick}>
        <img src={icon_arrow} alt='arrow-icon'
        className='px-3 py-2' />
        </div>
        </div>
    </div>
  )
}

export default Searchbar