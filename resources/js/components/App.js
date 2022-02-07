import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './PageRoutes';

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

    console.log(userData);
    return (
        // <div>
        //     {userData.data.map(course => {
        //         return (
        //             <div className="container my-3" key={course.id}>
        //                 <h2 className="text-xl">
        //                     {course.course}
        //                 </h2>
        //                 <p>{course.description}</p>
        //                 <div className="users my-2">
        //                     <h3 className="text-lg">Members</h3>
        //                     {course.users.map(user => {
        //                         return (
        //                             <div key={user.id} className="columns-2 px-1">
        //                                 <div className="w-full">{user.name}</div>
        //                             </div>
        //                         )
        //                     })}
        //                 </div>
        //             </div>
        //         )
        //     })}
        // </div>
        <PageRoutes />
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('app')
    );
}
