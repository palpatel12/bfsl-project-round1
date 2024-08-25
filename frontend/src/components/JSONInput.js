import React, { useState } from 'react';

const JSONInput = ({ onSubmit }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        try {
            const parsedData = JSON.parse(jsonInput);
            onSubmit(parsedData);
            setError('');
        } catch (e) {
            setError('Invalid JSON format');
        }
    };

    return (
        <div>
            <textarea 
                rows="5" 
                value={jsonInput} 
                onChange={(e) => setJsonInput(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default JSONInput;
