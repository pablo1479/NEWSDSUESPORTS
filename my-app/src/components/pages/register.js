import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        student_id: '',
        twitch: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        fetch('/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Registration successful');
                window.location.href = '/profile'; // Redirect to login page or anywhere else
            } else {
                alert('Registration failed: ' + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <header>
                <h1>SDSU ESports</h1>
            </header>

            <main>
                <div className="container">
                    <form id="registrationForm" onSubmit={handleFormSubmit}>
                        <label htmlFor="Fname">First Name:</label>
                        <input type="text" id="Fname" name="first_name" value={formData.first_name} onChange={handleInputChange} required />

                        <label htmlFor="Lname">Last Name:</label>
                        <input type="text" id="Lname" name="last_name" value={formData.last_name} onChange={handleInputChange} required />

                        <br /><br />
                        <label htmlFor="Semail">Student Email:</label>
                        <input type="text" id="Semail" name="email" value={formData.email} onChange={handleInputChange} required />

                        <label htmlFor="Pword"> Password:</label>
                        <input type="password" id="Pword" name="password" value={formData.password} onChange={handleInputChange} required />
                        <br /><br />

                        <label htmlFor="Sid">Student ID:</label>
                        <input type="text" id="Sid" name="student_id" value={formData.student_id} onChange={handleInputChange} required />
                        <br /><br />

                        <label htmlFor="Twitch">Twitch (Optional): </label>
                        <input type="text" id="Twitch" name="twitch" value={formData.twitch} onChange={handleInputChange} />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </main>

            <footer className="mt-5">
                <p>&copy; 2024 SDSU ESports Team. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
