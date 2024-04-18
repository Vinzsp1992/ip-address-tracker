import { useEffect, useState } from "react";
import IPDetails from "./IPDetails"
import Searchbar from "./Searchbar"
import Maps from "./Maps";

interface Coordinates {
    lat: number;
    lng: number;
}
const IPaddress = () =>{
    const [IPAddress, setIPAddress] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [timeZone, setTimeZone] = useState<string>('');
    const [isp, setIsp] = useState<string>('');
    const [coordinates, setCoordinates] = useState<Coordinates>({lat: 0, lng: 0});

    const fetchLocation = (ipAddress = '') =>{
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QoaczTGzMBIKBTRLs81p25EqmIf3H&ipAddress=${ipAddress}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setIPAddress(data.ip);
            setLocation(`${data.location.city}, ${data.location.country}, ${data.location.region}`);
            setTimeZone(`UTC ${data.location.timezone}`);
            setIsp(`${data.isp}`);
            setCoordinates({lat: data.location.lat, lng: data.location.lng});

        });
    };
    useEffect(()=>{
        fetchLocation();
    }, [])
    return(
        <div className='flex flex-col h-screen relative'>
            <Searchbar setIPAddress={setIPAddress} fetchLocation={fetchLocation} />
            <IPDetails ipAddress={IPAddress} location={location} timeZone={timeZone} isp={isp} />
            <Maps coordinates={coordinates} />

        </div>
    )
}
export default IPaddress