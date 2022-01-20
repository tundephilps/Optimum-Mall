import React from 'react';
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';
import './Mall.css';
import { Button, Nav, Badge, Dropdown, NavbarBrand, Navbar, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header () {
    
    const {
        state: { cart },
        dispatch,
        productDispatch
     } = CartState();


    return ( 
        <div>
            <Navbar bg="dark" variant="dark" className="navbar">
            <NavbarBrand>
            <Link to="/" className='link'>Optimum Mall</Link>
            </NavbarBrand>
            <Navbar.Text className="search" style={{paddingLeft: 300}}>
            <FormControl 
            style={{ width: 500 }}
             placeholder="search your products"
             className="form"
             onChange={(e) =>
                productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                 
                })}
            
             />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                        { <FaShoppingCart color="white" fontSize="25px" /> }
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 320, marginLeft: "-263px"}}>

                    {cart.length > 0 ? (
                        <>
                        {cart.map((prod) => (
                        <span className="cartitem" key={prod.id}>
                        <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                        />
                        <div className="cartItemDetail">
                            <span>{prod.name}</span>
                            <span>N {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer"}}
                        onClick={() =>
                        dispatch({
                            type:"REMOVE_FROM_CART",
                            payload: prod,
                        })
                    }
                    />
                    </span>
                    ))}
                    <Link to="/cart">
                        <Button style={{ width: "95%", margin: "0 10px"}}>
                        Go To Cart
                        </Button>
                        </Link>
                    </>
                    ) : (
                        <span style={{ padding: 10 }}>Cart is Empty</span>)}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
            </Navbar>
        </div>
     );
}

export default Header;