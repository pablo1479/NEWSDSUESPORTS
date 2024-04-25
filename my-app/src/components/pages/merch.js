import React, { useState } from 'react';
import { Link} from 'react-router-dom'; // Import Link from react-router-dom
// import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import merchandiseImage from './aztec_gaming_banner.jpg'; // Ensure the image path is correct
function MerchPage() {
    // Placeholder merchandise items
const [searchTerm, setSearchTerm] = useState('');
const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
const [filterOptions, setFilterOptions] = useState({});
const [cart, setCart] = useState([]);
// const history = useHistory(); // Initialize useHistory

const merchandiseItems = [
    { id: 1, name: "Manshawdie's Pants", description: "Pants representing Team Manshawdies", price: 19.99, size: "M", quantity: 10, image: "item1.jpg" },
    { id: 2, name: "Teh's Angels T-Shirt", description: "T-shirt showcasing with Team Teh's Angels", price: 29.99, size: "L", quantity: 5, image: "./TehsAngels.jpg" },
    { id: 3, name: "Doganators Hat", description: "Hat presenting Team Doganators", price: 24.99, size: "S", quantity: 20, image: "item3.jpg" },
    { id: 4, name: "Alexatron KeyChains", description: "Keychain displaying Team Alexatron", price: 18.99, size: "M", quantity: 2, image: "item3.jpg" },
    { id: 5, name: "COMPE DREAM TEAM underwear", description: "Briefs with COMPE DREAM TEAM", price: 90.99, size: "L", quantity: 3, image: "item3.jpg" },
    { id: 6, name: "Mi Mi Slippers", description: "Team Mi Mi slippers", price: 21.99, size: "S", quantity: 4, image: "item3.jpg" },
    { id: 7, name: "Pabloaties Sunglasses", description: "Team Pabloaties sunglasses", price: 30.99, size: "M", quantity: 7, image: "item3.jpg" },
    { id: 8, name: "Pookie Puffs T-Shirt", description: "Team Pookie Puffs T-shirt", price: 10.99, size: "S", quantity: 20, image: "item3.jpg" },
    { id: 9, name: "RobbieTrack Sweater", description: "Team RobbieTrack Sweater", price: 35.99, size: "M", quantity: 10, image: "item3.jpg" },
    // Add more items as needed USING DATABASE MYSQL
];

const filteredItems = merchandiseItems.map(item => {
    const quantityInCart = cart.reduce((total, cartItem) => {
        if (cartItem.id === item.id) {
            return total + 1;
        }
        return total;
    }, 0);
    return {
        ...item,
        quantityLeft: item.quantity - quantityInCart
    };
}).filter(item => {
    return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.price >= priceRange.min &&
        item.price <= priceRange.max &&
        (filterOptions.size ? item.size === filterOptions.size : true) && // Apply size filter if selected
        (filterOptions.quantity ? item.quantityLeft >= filterOptions.quantity : true) // Apply quantity filter if selected
    );
});


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        setPriceRange({ ...priceRange, [name]: parseFloat(value) });
    };

    const addToCart = (itemId) => {
        const itemToAdd = merchandiseItems.find(item => item.id === itemId);
        if (itemToAdd) {
            setCart([...cart, itemToAdd]);
        }
    };

    // Calculate total price of items in the cart
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    // const handleCheckout = () => {
    //     // Navigate to checkout page with cart data
    //     history.push({
    //         pathname: '/checkout',
    //         state: { cart: cart } // Pass cart data as state
    //     });
    // };

    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            {/* Image Section with Overlay Text */}
            <Box sx={{
                position: 'relative', // Needed for absolute positioning of the Typography within
                width: '100%',
                overflow: 'hidden'
            }}>
                <img src={merchandiseImage} alt="Merchandise" style={{ width: '50%', height: 'auto' }} />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a dark overlay for better readability
                    padding: '1rem'
                }}>
                    <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 1 }}>
                        Welcome to the Merchandise Page!
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        Explore our collection of merchandise. Check out our latest products!
                    </Typography>
                </Box>
            </Box>

            {/* Search Bar */}
            <Box sx={{ marginTop: 2 }}>
                <Typography variant="h6" sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 1 }}>
                    Seach by name
                </Typography>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
                />
            </Box>

            {/* Filters and Sorting Options */}
            <Box sx={{
                marginTop: 2,
                bgcolor: 'background.paper',
                padding: 2
            }}>
                <Typography variant="h6" sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                    Filter & Sort
                </Typography>
                {/* Filter by Price */}
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                        Price Range
                    </Typography>
                    <input type="range" min="0" max="100" name="min" value={priceRange.min} onChange={handlePriceChange} />
                    <input type="range" min="0" max="100" name="max" value={priceRange.max} onChange={handlePriceChange} />
                    <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        ${priceRange.min} - ${priceRange.max} {/* Display the current range values */}
                    </Typography>
                </Box>
                {/* Filter by Size */}
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                        Size
                    </Typography>
                    <select value={filterOptions.size || ''} onChange={(e) => setFilterOptions({...filterOptions, size: e.target.value})}>
                        <option value="">All Sizes</option>
                        <option value="XS">Extra Small</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                        {/* Add more size options as needed */}
                    </select>
                </Box>
                {/* Filter by Quantity */}
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                        Quantity (At least)
                    </Typography>
                    <input type="number" min="0" name="quantity" value={filterOptions.quantity || ''} onChange={(e) => setFilterOptions({...filterOptions, quantity: e.target.value})} />
                </Box>
            </Box>

            {/* Merchandise Items */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
                marginTop: 3 // Added margin-top for spacing between image and merchandise items
            }}>
                {filteredItems.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                        <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: 1 }}>
                            {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                            {item.description}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                            ${item.price.toFixed(2)}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                           Quantity Left: {item.quantity}
                        </Typography>
                        <button onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                ))}
            </Box>


            {/* Cart Section */}
            <Box sx={{ marginTop: 2}}>
                <Typography variant="h6" sx={{ fontSize: '1.4rem', fontWeight: 'bold'}}>
                    Cart
                </Typography>
                <ul>
                    {cart.map((item, index) => (
                        <div key={index}>
                            {index+1}. {item.name}:  ${item.price.toFixed(2)}
                        </div>
                    ))}
                        <div>Total: ${cartTotal.toFixed(2)}</div>
                        <div>
                            <Link to="/checkout">
                                <button>Checkout</button>    {/* <button onClick={handleCheckout}>Checkout</button> */}
                            </Link>
                        </div>
                </ul>
            </Box>
        </Box>
    );
}

export default MerchPage;
