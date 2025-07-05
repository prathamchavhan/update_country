import {Headers} from "../ui/Headers.JSX";
import {Footers} from "../ui/Footers.JSX";
import {Outlet} from "react-router-dom";


export const Applayout =()=>{
    return (
    <>
   
    <Headers/>|
     <Outlet />
    <Footers/>
    </>
    );
};