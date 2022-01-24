import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
    const [userData, setUserData] = useState({
        data: [],
        loading: "loading"
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://127.0.0.1:8000/courses");
            setUserData({ data: response.data, loading: "done" });
        }

        fetchData();
    }, []);

    return (
        <div>
            {userData.data.map(course => {
                return (
                    <div className="container" key={course.id}>
                        <h2>
                            {course.course}
                        </h2>
                        <div className="users">
                            {course.users.map(user => {
                                return (
                                    <div key={user.id}>
                                        {user.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}