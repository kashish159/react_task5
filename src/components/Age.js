import React, { useState } from 'react';

function AgeCalculator() {

  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');


  const calculateAge = () => {
    if (birthdate) {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;
      setAge(ageInYears);
    }
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>Enter your date of birth</label>
      <br/>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <br/>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>You are {age} years.</p>}
    </div>
  );
}

export default AgeCalculator;
