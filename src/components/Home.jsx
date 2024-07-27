import React, { useState, useEffect } from 'react';
import { api } from '../api/api';
// Import the spinner
import { ScaleLoader } from 'react-spinners';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const result = await api.get('/todos').then((e) => e.data);
            setTodos(result);
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-2">
            {loading ? (
                <div className="flex justify-center items-center px-0" >
                    <ScaleLoader size={50} color={"gray"} loading={loading}  />
                </div>
            ) : (
                todos.map((todo) => (
                    <div key={todo.id} className={`flex rounded-md my-2 p-3 ${todo.completed ? "bg-green-700 line-through" : "bg-gray-200"}`}>
                        <h3 className='font-bold'>{todo.title}</h3>
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;
