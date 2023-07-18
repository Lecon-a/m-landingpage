import React, { useState } from "react";

const Counter = ({innerText}) => {

    const [value, setValue] = useState(0);

    const styles = {
        btn: {
          cursor: 'pointer',
          width: 'fix-content',
          border: 'none',
          outline: 'none',
          padding: '.75rem',
          borderRadius: '25px',
          color: '#fff',
          backgroundColor: 'blue',
        },
    
        badge: {
          borderRadius: '50%',
          padding: '4px 8px',
          marginLeft: '4px',
          backgroundColor: '#eee',
          color: 'blue',
        }
        
    }

    const handleCount = () => {
        setValue(value + 1)
    }

    return (
        <button style={styles.btn} onClick={handleCount}>{innerText} <span style={styles.badge}>{value}</span></button>
      )
    }

    export default Counter;