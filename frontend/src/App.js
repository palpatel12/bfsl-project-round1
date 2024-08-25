import React, { useState } from 'react';
import JSONInput from './components/JSONInput';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
    const [response, setResponse] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleJsonSubmit = async (jsonData) => {
        try {
            const res = await fetch('http://localhost:3000/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            });

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>{response?.roll_number}</h1>
            <JSONInput onSubmit={handleJsonSubmit} />
            {response && (
                <>
                    <MultiSelectDropdown setSelectedOptions={setSelectedOptions} />
                    <ResponseDisplay response={response} selectedOptions={selectedOptions} />
                </>
            )}
        </div>
    );
};

export default App;
