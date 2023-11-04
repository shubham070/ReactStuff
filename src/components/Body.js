import RestaurantCard from '../components/RestaurantCard';

const Body = (res)=>{
    return(     
        <div className="body">
      
            <div className="Search">Search</div>
            <div className="res-container">
                { 
                 
                  res.res.data.data.cards && res.res.data.data.cards.map((x) => {  
                                         
                        return <RestaurantCard key={x.data.id} restaurantData = {x} ></RestaurantCard>
                    })
                }
            </div>

        </div>
    )
}

export default Body;
