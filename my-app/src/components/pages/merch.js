import React from 'react';
import './merchstyles.css';

function App() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        fetch('/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.access) {
                localStorage.setItem('accessToken', data.access);
                localStorage.setItem('refreshToken', data.refresh);
                window.location.href = '/profile'; // Redirect to the profile page or wherever needed
            } else {
                alert('Invalid credentials or some error occurred');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <section className="bg-white text-dark p-0 p-lg-0 pt-lg-5 text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>
                                <span className="text-danger">Merchandise</span>
                            </h1>
                            <p className="lead my-4">
                                Show your team appreciation with some merch!
                            </p>
                        </div>
                        <img className="img-fluid w-50 d-none d-sm-block" src="/path/to/aztec_gaming_banner.jpg" alt="Aztec Gaming Banner" />
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Filters</h4>
                            <ul>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Price
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Quantity
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Size
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Type
                                    </label>
                                </div>
                            </ul>
                        </div>
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Sort By</option>
                                <option value="1">Price</option>
                                <option value="2">Size</option>
                                <option value="3">Quantity</option>
                            </select>

                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">1. Team Manshawdies T-Shirt</h5>
                                        <small className="text-body-secondary">$14.99</small>
                                    </div>
                                    <p className="mb-1">T-shirt representing the Team Manshawdies</p>
                                    <small className="text-body-secondary">3 left</small>
                                </a>

                                {/* Additional list items go here */}

                            </div>

                            <h3>Use this to add more merchandise!</h3>
                            <form>
                                <input type="text" name="name" placeholder="Product Name" required />
                                <input type="text" name="description" placeholder="Description" required />
                                <input type="number" name="price" placeholder="Price" required />
                                <input type="number" name="quantity" placeholder="Quantity" required />
                                <button type="submit">Add Merchandise</button>
                            </form>

                        </div>
                        <div className="col">
                            <div className="container">
                                <p className="text-black-50">Stay refreshed for the grind</p>
                                <iframe width="300" height="450" src="https://www.youtube.com/embed/N9iAo4r5Wfg" allow="autoplay"></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Log In</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="loginForm" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" className="form-control" id="username" name="username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" name="password" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 SDSU ESports Team. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
