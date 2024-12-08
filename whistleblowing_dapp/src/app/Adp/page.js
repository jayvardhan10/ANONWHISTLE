'use client'
import { useState } from 'react';

export default function AadhaarPincodeVerifier() {
  const [file, setFile] = useState(null);
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleVerify = async () => {
    const formData = new FormData();
    formData.append('qrImage', file);
    formData.append('enteredPincode', pincode);

    const response = await fetch('/api/verify-pincode', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.message);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Enter Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <button onClick={handleVerify}>Verify Pincode</button>
      {result && <p>{result}</p>}
    </div>
  );
}
