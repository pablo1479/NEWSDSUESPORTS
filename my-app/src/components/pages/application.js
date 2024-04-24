import React from 'react';

function App() {
    return (
        <div>
            <header>
                <h1>SDSU ESports</h1>
            </header>

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

            <div className="container">
                <form action="{% url 'submit_application' %}" method="POST">
                    <div className="mb-3">
                        <label htmlFor="teamName" className="form-label">Team Name:</label>
                        <input type="text" className="form-control" id="teamName" name="teamName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="teamLeaderName" className="form-label">Team Leader Name:</label>
                        <input type="text" className="form-control" id="teamLeaderName" name="teamLeaderName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="teamLeaderEmail" className="form-label">Team Leader Email:</label>
                        <input type="email" className="form-control" id="teamLeaderEmail" name="teamLeaderEmail" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gamesInterested" className="form-label">Games Interested In:</label>
                        <input type="text" className="form-control" id="gamesInterested" name="gamesInterested" required />
                    </div>
                    <div className="mb-3" id="teamMembers">
                        <label htmlFor="teamMembers" className="form-label">Team Members:</label>
                        <div className="team-member">
                            <input type="text" className="form-control" name="teammateName[]" placeholder="Teammate Name" />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mb-3" onClick={addMember}>Add Member</button>
                    <input type="submit" className="btn btn-success" value="Submit Application" />
                </form>
            </div>

            <footer className="">
                <p>&copy; 2024 SDSU ESports Team. All rights reserved.</p>
            </footer>
        </div>
    );
}

function addMember() {
    const teamMembers = document.getElementById('teamMembers');
    const newMemberInput = document.createElement('input');
    newMemberInput.type = 'text';
    newMemberInput.className = 'form-control';
    newMemberInput.name = 'teammateName[]';
    newMemberInput.placeholder = 'Teammate Name';
    teamMembers.appendChild(newMemberInput);
}

export default App;
