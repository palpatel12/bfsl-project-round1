import React from 'react';

const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

const MultiSelectDropdown = ({ setSelectedOptions }) => {
    const handleChange = (event) => {
        const { options } = event.target;
        const selected = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedOptions(selected);
    };

    return (
        <select multiple={true} onChange={handleChange}>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default MultiSelectDropdown;
