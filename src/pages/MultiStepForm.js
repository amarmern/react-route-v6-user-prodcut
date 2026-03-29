import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    notifications: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validation per step
  const validate = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
    }

    if (step === 2) {
      if (!formData.interest) newErrors.interest = 'Please select an interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validate()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted Data:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <h2>Multi-Step Form</h2>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Profile</span>
        <span>Interest</span>
        <span>Settings</span>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Profile */}
        {step === 1 && (
          <div>
            <h3>Profile</h3>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{errors.name}</p>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{errors.email}</p>
          </div>
        )}

        {/* Step 2: Interest */}
        {step === 2 && (
          <div>
            <h3>Interest</h3>

            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="coding">Coding</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
            </select>

            <p style={{ color: 'red' }}>{errors.interest}</p>
          </div>
        )}

        {/* Step 3: Settings */}
        {step === 3 && (
          <div>
            <h3>Settings</h3>

            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
              />
              Enable Notifications
            </label>
          </div>
        )}

        {/* Buttons */}
        <div style={{ marginTop: '20px' }}>
          {step > 1 && <button onClick={prevStep}>Back</button>}

          {step < 3 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}

          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
