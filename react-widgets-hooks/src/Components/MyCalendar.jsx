import React from 'react';

const MyCalendar = () => {
    return (
        <div>
            <Calendar defaultValue={new Date()} />
        </div>
    );
};

export default MyCalendar;