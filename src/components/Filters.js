
import { Button, FormCheck } from "react-bootstrap";
import { CartState } from "../context/Context";
import './Mall.css';
import Rating from "./Rating";

const Filters = () => {

  const {
      productState: { byStock, byFastDelivery, sort, byRating },
      productDispatch,
  } = CartState();
    
    return (<div className="filters">
        <span className="title">Filter Products</span>
        <span>
            <FormCheck 
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={'inline-1'}
            onChange={() =>
                productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                })}
                checked={sort === "lowToHigh" ? true : false}
            />
        </span>

        <span>
            <FormCheck 
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={'inline-2'}
            onChange={() =>
                productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                })}
                checked={sort === "highToLow" ? true : false}
            
            />
        </span>
        <span>
            <FormCheck 
            inline
            label="Out of Stock"
            name="group1"
            type="checkbox"
            id={'inline-3'}
            onChange={() =>
                productDispatch({
                    type: "FILTER_BY_STOCK",
                 
                })}
                checked={byStock}
            
            />
        </span>
        <span>
            <FormCheck 
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={'inline-4'}
            onChange={() =>
                productDispatch({
                    type: "FILTER_BY_DELIVERY",
                 
                })}
                checked={byFastDelivery}
            
            />
        </span>
        <div>
       <span className="star">
            <label style={{ paddingRight: 10 }}>Rating:</label>
            <Rating rating={byRating} 
            onClick={(i) => productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
            })
        }
            style={{ cursor: "pointer" }} />
            
            </span>
            </div>
        <Button variant="light" style={{ marginTop: 20 }}
        onClick={() =>
            productDispatch({
                type: "CLEAR_FILTERS",
             
            })}
            checked={byStock}
        
        > Clear Filters </Button>
        
    </div>  );
};

export default Filters;