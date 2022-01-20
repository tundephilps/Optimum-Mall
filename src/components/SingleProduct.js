import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

function SingleProduct({ prod }) {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return ( <div>
        <Card>
            <Card.Img variant="right" src={prod.image} alt={prod.name}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10}}>
                    <span>N {prod.price.split(".")[0]}</span>
                    {prod.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>days delivery</div>

                    )}
                    <Rating rating={prod.ratings} />
                </Card.Subtitle>
                {cart.some(p=>p.id===prod.id) ? (
                    <Button onClick={() => 
                        {dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                        });
                    }}
                        variant="danger"> Remove from Cart</Button>
                
                ):(<Button onClick={() => 
                    {dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                    });
                }}
                    disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to Cart"}</Button>)

                }
                </Card.Body>
        </Card>
    </div> );
}

export default SingleProduct;