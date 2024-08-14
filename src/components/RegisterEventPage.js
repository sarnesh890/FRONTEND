
// import React, { useState } from 'react';
// import '../styles/RegisterEventPage.css'


// const RegisterEventPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     eventName: '',
//     tickets: 1,
//     paymentMethod: 'credit-card',
//     cardNumber: '',
//     accountNumber: '',
//     upiId: '',
//   });

//   const [registrationStatus, setRegistrationStatus] = useState('');
//   const [errors, setErrors] = useState({});
//   const [showPopup, setShowPopup] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid';
//     }
//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone number is invalid';
//     }
//     if (!formData.address.trim()) newErrors.address = 'Address is required';
//     if (!formData.eventName.trim()) newErrors.eventName = 'Event name is required';
//     if (formData.tickets < 1) newErrors.tickets = 'At least one ticket is required';

//     if (formData.paymentMethod === 'credit-card' && !formData.cardNumber.trim()) {
//       newErrors.cardNumber = 'Card number is required';
//     }
//     if (formData.paymentMethod === 'bank-transfer' && !formData.accountNumber.trim()) {
//       newErrors.accountNumber = 'Account number is required';
//     }
//     if (formData.paymentMethod === 'upi' && !formData.upiId.trim()) {
//       newErrors.upiId = 'UPI ID is required';
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = validate();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     console.log('Form Data:', formData); 
//     setShowPopup(true);
//   };

//   const handleConfirm = async () => {
//     setShowPopup(false);

//     try {
//       const response = await fetch('http://localhost:8080/register/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to register');
//       }

//       const data = await response.json();
//       console.log('Response Data:', data); 
//       setRegistrationStatus('Registration Successful!');
//     } catch (error) {
//       console.error('Registration error:', error);
//       setRegistrationStatus('Registration failed. Please try again later.');
//     }
//   };

//   const handleCancel = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className='Bg'>
//       <div className="registration-container">
//         <h2>Event Registration</h2>
//         <form onSubmit={handleSubmit} noValidate>
//           {/* Form fields */}
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={errors.name ? 'input-error' : ''}
//               required
//             />
//             {errors.name && <span className="error">{errors.name}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={errors.email ? 'input-error' : ''}
//               required
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className={errors.phone ? 'input-error' : ''}
//               required
//             />
//             {errors.phone && <span className="error">{errors.phone}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">Address</label>
//             <textarea
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className={errors.address ? 'input-error' : ''}
//               required
//             ></textarea>
//             {errors.address && <span className="error">{errors.address}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="eventName">Event Name</label>
//             <input
//               type="text"
//               id="eventName"
//               name="eventName"
//               value={formData.eventName}
//               onChange={handleChange}
//               className={errors.eventName ? 'input-error' : ''}
//               required
//             />
//             {errors.eventName && <span className="error">{errors.eventName}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="tickets">Number of Tickets</label>
//             <input
//               type="number"
//               id="tickets"
//               name="tickets"
//               value={formData.tickets}
//               onChange={handleChange}
//               min="1"
//               required
//             />
//             {errors.tickets && <span className="error">{errors.tickets}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="paymentMethod">Preferred Payment Method</label>
//             <select
//               id="paymentMethod"
//               name="paymentMethod"
//               value={formData.paymentMethod}
//               onChange={handleChange}
//               required
//             >
//               <option value="credit-card">Credit Card</option>
//               <option value="bank-transfer">Bank Transfer</option>
//               <option value="upi">UPI</option>
//             </select>
//           </div>
//           {formData.paymentMethod === 'credit-card' && (
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 name="cardNumber"
//                 value={formData.cardNumber}
//                 onChange={handleChange}
//                 className={errors.cardNumber ? 'input-error' : ''}
//                 required
//               />
//               {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
//             </div>
//           )}
//           {formData.paymentMethod === 'bank-transfer' && (
//             <div className="form-group">
//               <label htmlFor="accountNumber">Account Number</label>
//               <input
//                 type="text"
//                 id="accountNumber"
//                 name="accountNumber"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//                 className={errors.accountNumber ? 'input-error' : ''}
//                 required
//               />
//               {errors.accountNumber && <span className="error">{errors.accountNumber}</span>}
//             </div>
//           )}
//           {formData.paymentMethod === 'upi' && (
//             <div className="form-group">
//               <label htmlFor="upiId">UPI ID</label>
//               <input
//                 type="text"
//                 id="upiId"
//                 name="upiId"
//                 value={formData.upiId}
//                 onChange={handleChange}
//                 className={errors.upiId ? 'input-error' : ''}
//                 required
//               />
//               {errors.upiId && <span className="error">{errors.upiId}</span>}
//             </div>
//           )}
//           <button type="submit" className="registration-button">
//             Proceed to Pay
//           </button>
//         </form>

//         {showPopup && (
//           <div className="popup-overlay">
//             <div className="popup-content">
//               <h3>Registration Details</h3>
//               <p><strong>Name:</strong> {formData.name}</p>
//               <p><strong>Email:</strong> {formData.email}</p>
//               <p><strong>Phone:</strong> {formData.phone}</p>
//               <p><strong>Address:</strong> {formData.address}</p>
//               <p><strong>Event Name:</strong> {formData.eventName}</p>
//               <p><strong>Tickets:</strong> {formData.tickets}</p>
//               <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
//               {formData.paymentMethod === 'credit-card' && <p><strong>Card Number:</strong> {formData.cardNumber}</p>}
//               {formData.paymentMethod === 'bank-transfer' && <p><strong>Account Number:</strong> {formData.accountNumber}</p>}
//               {formData.paymentMethod === 'upi' && <p><strong>UPI ID:</strong> {formData.upiId}</p>}
//               <div className="popup-buttons">
//                 <button onClick={handleConfirm}>Continue to Register</button>
//                 <button onClick={handleCancel}>Cancel</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {registrationStatus && <p className="registration-status">{registrationStatus}</p>}
//       </div>
//     </div>
//   );
// };

// export default RegisterEventPage;

import React, { useState } from 'react';
import '../styles/RegisterEventPage.css';

const RegisterEventPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    eventName: '',
    tickets: 1,
    paymentMethod: 'credit-card',
    cardNumber: '',
    accountNumber: '',
    upiId: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.eventName.trim()) newErrors.eventName = 'Event name is required';
    if (formData.tickets < 1) newErrors.tickets = 'At least one ticket is required';

    if (formData.paymentMethod === 'credit-card' && !formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    }
    if (formData.paymentMethod === 'bank-transfer' && !formData.accountNumber.trim()) {
      newErrors.accountNumber = 'Account number is required';
    }
    if (formData.paymentMethod === 'upi' && !formData.upiId.trim()) {
      newErrors.upiId = 'UPI ID is required';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowPopup(true);
  };

  const handleConfirm = async () => {
    setShowPopup(false);
  
    try {
      const response = await fetch('http://localhost:8080/register/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // Log and parse the error response
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        throw new Error('Failed to register');
      }
  
      const data = await response.json();
      console.log('Response Data:', data);
      setRegistrationStatus('Registration Successful!');
    } catch (error) {
      console.error('Registration error:', error);
      setRegistrationStatus(`Registration failed: ${error.message}`);
    }
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className='Bg'>
      <div className="registration-container">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Form fields */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'input-error' : ''}
              required
            ></textarea>
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              className={errors.eventName ? 'input-error' : ''}
              required
            />
            {errors.eventName && <span className="error">{errors.eventName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="tickets">Number of Tickets</label>
            <input
              type="number"
              id="tickets"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              required
            />
            {errors.tickets && <span className="error">{errors.tickets}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Preferred Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="credit-card">Credit Card</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          {formData.paymentMethod === 'credit-card' && (
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className={errors.cardNumber ? 'input-error' : ''}
                required
              />
              {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
            </div>
          )}
          {formData.paymentMethod === 'bank-transfer' && (
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className={errors.accountNumber ? 'input-error' : ''}
                required
              />
              {errors.accountNumber && <span className="error">{errors.accountNumber}</span>}
            </div>
          )}
          {formData.paymentMethod === 'upi' && (
            <div className="form-group">
              <label htmlFor="upiId">UPI ID</label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                value={formData.upiId}
                onChange={handleChange}
                className={errors.upiId ? 'input-error' : ''}
                required
              />
              {errors.upiId && <span className="error">{errors.upiId}</span>}
            </div>
          )}
          <button type="submit" className="registration-button">
            Proceed to Pay
          </button>
        </form>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>Registration Details</h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Event Name:</strong> {formData.eventName}</p>
              <p><strong>Tickets:</strong> {formData.tickets}</p>
              <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
              {formData.paymentMethod === 'credit-card' && <p><strong>Card Number:</strong> {formData.cardNumber}</p>}
              {formData.paymentMethod === 'bank-transfer' && <p><strong>Account Number:</strong> {formData.accountNumber}</p>}
              {formData.paymentMethod === 'upi' && <p><strong>UPI ID:</strong> {formData.upiId}</p>}
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      {registrationStatus && <div className="registration-status">{registrationStatus}</div>}
    </div>
  );
};

export default RegisterEventPage;
