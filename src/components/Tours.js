import Card from "./Card";
function Tours({tours,removeTour}){
    return (
        <div>
            <div>
               <h2>Plan With Dhruvik</h2> 
            </div>
            <div>
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;