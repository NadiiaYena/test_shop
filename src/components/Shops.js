import jsonData from '../shops.json'

export default function Shops() {
    const list = () => {
        if (jsonData && jsonData.name && jsonData.name.length > 0) {
          const items = jsonData.name.map((item, index) => {
            console.log(item, index);
           
            return <div key={item+index} className='list-item-block'>
                        {item}
                    </div>
          });
    
          return items;
        } else {
          
          return <p>No shops available</p>;
        }
      };


    return(
        <div className="shops">
            <div className="shops-title"> Shops:</div>
            <div className="shops-list">{list()}</div>
       </div>
    ) 
   }