import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
    const filteredResponse = {};

    if (selectedOptions.includes('Alphabets')) {
        filteredResponse.alphabets = response.alphabets;
    }
    if (selectedOptions.includes('Numbers')) {
        filteredResponse.numbers = response.numbers;
    }
    if (selectedOptions.includes('Highest lowercase alphabet')) {
        filteredResponse.highest_lowercase_alphabet = response.highest_lowercase_alphabet;
    }

    return (
        <div>
            <h2>Response:</h2>
            <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
        </div>
    );
};

export default ResponseDisplay;
