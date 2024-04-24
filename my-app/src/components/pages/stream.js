import React from 'react';
import './stream.css';

function App() {
    return (
        <div>
            <header>
                <h1>SDSU ESports</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">SDSU ESports</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="d-flex">
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Log In</button>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Application</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Statistics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Merchandise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Stream</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="p-5 bg-black">
                <div className="container bg-black">
                    <div className="row">
                        <main className="container midcol bg-black text-lg-center">
                            <ul>
                                <h2 className="text-white">Popular Streamers:</h2>

                                <div className="col">
                                    <h4 className="text-white">CaseOh</h4>
                                    <div className="d-flex justify-content-center">
                                        <iframe width="400" height="300" src="https://www.youtube.com/embed/bokU-oZEFos" title="CASE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                    <p className="text-white">Twitch Stream: <a href="https://www.twitch.tv/caseoh_">Caseoh_</a></p>
                                </div>

                                <div className="col">
                                    <h4 className="text-white">Jynzxi</h4>
                                    <div className="d-flex justify-content-center">
                                        <iframe width="400" height="300" src="https://www.youtube.com/embed/aGnYseCtlfE" title="JYNXZI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                    <p className="text-white">Twitch Stream: <a href="https://www.twitch.tv/jynxzi">jynxzi</a></p>
                                </div>

                                <div className="col">
                                    <h4 className="text-white">Kai Cenat</h4>
                                    <div className="d-flex justify-content-center">
                                        <iframe width="400" height="300" src="https://www.youtube.com/embed/vNeCk2v6PsA" title="KAI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                    <p className="text-white">Twitch Stream: <a href="https://www.twitch.tv/kaicenat">Kai Cenat</a></p>
                                </div>

                                <div className="col">
                                    <h4 className="text-white">Pokimane</h4>
                                    <div className="d-flex justify-content-center">
                                        <iframe width="400" height="300" src="https://www.youtube.com/embed/nFsBIhoTQ50" title="POKI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                    <p className="text-white">Twitch Stream: <a href="https://www.twitch.tv/pokimane">Pokimane</a></p>
                                </div>

                                <div className="col">
                                    <h4 className="text-white">Aztec Gaming</h4>
                                    <img src="/path/to/SDSU controller.png" alt="" className="center-image" />
                                    <p className="text-white">Twitch Stream: <a href="https://www.twitch.tv/aztec_gaming/about">Aztec Gaming</a></p>
                                </div>
                            </ul>
                        </main>
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
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" className="form-control" id="username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-5">
                <p>&copy; 2024 SDSU ESports Team. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
