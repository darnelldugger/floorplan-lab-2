import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";

const Floorplan = (props) => {
  return ( 
    <>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum ={1}/>
      <Bedroom bedNum ={2}/>
      <Bedroom bedNum ={3}/>
      <Bedroom bedNum ={4}/>

    </>
   );
}
 
export default Floorplan;