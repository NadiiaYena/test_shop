import Products from "./Products";
import Shops from "./Shops";

export default function Home() {
    
    return(
        <div className="home">
            
            <div className="main-block"> 
                <Shops/>
                <Products/>
            </div>
       </div>
    ) 
   }