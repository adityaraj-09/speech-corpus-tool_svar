
import React, { useState } from 'react';
import FooterComponent from '../Components/FooterComponent';
import HeaderComponent from '../Components/HeaderComponent';





function UserForm() {
  const [formData, setFormData] = useState({
    Name: '',
    NativePlace: '',
    email: '',
    gender: '',
    age: '',
    economicBackground: '',
    dialects: '',
    speechProblems: '',
    previousSpeechProblems: '', // New field for previous speech problems
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    let newValue = value;

    if (type === 'checkbox') {
      newValue = formData[name] === value ? '' : value;
    } else if (type === 'select') {
      newValue=value;
    }else if(type==="radio"){
      newValue=value
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    
  };

  return (
    <>
      <HeaderComponent />
      <div className="form">
        <h1>User Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Native place:</label>
            <input
              type="text"
              name="NativePlace"
              value={formData.NativePlace}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="checkbox-group">
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
              />{' '}
              Female
            </label>
          </div>
          <div>
          <label>Have you had speech related problems earlier or now?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="previousSpeechProblems"
                value="yes"
                checked={formData.previousSpeechProblems === 'yes'}
                onChange={handleInputChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="previousSpeechProblems"
                value="no"
                checked={formData.previousSpeechProblems === 'no'}
                onChange={handleInputChange}
              />{' '}
              No
            </label>
            </div>
            </div>
          <div>
            <label>Economic Background:</label>
            <select
              name="economicBackground"
              value={formData.economicBackground}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="low">less than 5L</option>
              <option value="medium">5L to 9L</option>
              <option value="high">9L-20L</option>
              <option value="high">more than 20L</option>
            </select>
          </div>
          
          
          <div>
            <label>Speech related problems:</label>
            <select
            name="speechProblems"
            value={formData.speechProblems}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="stuttering">Stuttering or Stammering</option>
            <option value="speech_sound">Speech Sound Disorders</option>
            <option value="apraxia">Childhood Apraxia of Speech</option>
            <option value="aphasia">Aphasia</option>
            <option value="cleft_lip_palate">Cleft Lip and/or Palate</option>
            <option value="dysarthria">Dysarthria</option>
            <option value="hearing_loss">Hearing Loss</option>
            <option value="oral_motor">Oral Motor Problems</option>
            <option value="developmental_delays">Developmental Delays</option>
            <option value="traumatic_brain_injury">Traumatic Brain Injury (TBI)</option>
            <option value="neurological_conditions">Neurological Conditions</option>
            <option value="none">None</option>
          </select>
          </div>
          <div>
            <label>Dialects:</label>
            <select
              name="dialects"
              value={formData.dialects}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="haryanvi">Haryanvi (Haryana)</option>
              <option value="khariboli">Khariboli (Delhi, Western Uttar Pradesh)</option>
              <option value="brajBhasha">Braj Bhasha (Rajasthan, Agra, and Mathura regions)</option>
              <option value="bhojpuri">Bhojpuri (Bihar, Eastern Uttar Pradesh)</option>
              <option value="awadhi">Awadhi (Central & Eastern Uttar Pradesh)</option>
              <option value="magahi">Magahi (Bihar)</option>
              <option value="maithili">Maithili (Bihar, Jharkhand)</option>
              <option value="bundeli">Bundeli (Bundelkhand region, Madhya Pradesh & Uttar Pradesh)</option>
              <option value="chhattisgarhi">Chhattisgarhi (Chhattisgarh)</option>
              <option value="punjabi">Punjabi</option>
              <option value="marwari">Marwari (Marwar region)</option>
              <option value="mewari">Mewari (Udaipur region)</option>
              <option value="dhundhari">Dhundhari (Jaipur region)</option>
              <option value="harauti">Harauti (Kota region)</option>
              <option value="shekhawati">Shekhawati (Shekhawati region)</option>
              <option value="mewati">Mewati (Alwar and Bharatpur regions)</option>
              <option value="garhwali">Garhwali (Garhwal region)</option>
              <option value="kumaoni">Kumaoni (Kumaon region)</option>
              <option value="bengali">Bengali</option>
              <option value="odia">Odia</option>
              <option value="standardAssamese">Standard Assamese</option>
              <option value="easternAssamese">Eastern Assamese (Upper Assam)</option>
              <option value="westernAssamese">Western Assamese (Lower Assam)</option>
              <option value="angika">Angika (Bhagalpur and Monghyr districts)</option>
              <option value="magahi">Magahi (Magadh region)</option>
              <option value="bhojpuri">Bhojpuri (Northwestern Bihar)</option>
              <option value="gujarati">Gujarati</option>
              <option value="standardMarathi">Standard Marathi (Coastal Konkan region)</option>
              <option value="varhadi">Varhadi (Vidarbha region)</option>
              <option value="dangi">Dangi (Dang region)</option>
              <option value="goanKonkani">Goan Konkani (Goa)</option>
              <option value="mangaloreanKonkani">Mangalorean Konkani (Coastal Karnataka)</option>
              <option value="karwari">Karwari (Coastal Karnataka)</option>
              <option value="malvi">Malvi (Malwa region)</option>
              <option value="nimadi">Nimadi (Narmada river valley)</option>
              <option value="bundeli">Bundeli (Bundelkhand region)</option>
              <option value="coastalTelugu">Coastal Telugu (Andhra region)</option>
              <option value="rayalaseemaTelugu">Rayalaseema Telugu (Rayalaseema region)</option>
              <option value="telanganaTelugu">Telangana Telugu (Telangana region)</option>
              <option value="tamil">Tamil</option>
              <option value="mysoreKannada">Mysore Kannada (Southern Karnataka, standard form)</option>
              <option value="coastalKannada">Coastal Kannada (Mangalore, Udupi regions)</option>
              <option value="hubliDharwadKannada">Hubli-Dharwad Kannada (Northern Karnataka)</option>
              <option value="centralMalayalam">Central Malayalam (Standard form)</option>
              <option value="northernMalayalam">Northern Malayalam (Kasaragod, Kannur regions)</option>
              <option value="southernMalayalam">Southern Malayalam (Thiruvananthapuram region)</option>
              <option value="tulu">Tulu (Coastal Karnataka, mainly in Mangalore and Udupi districts)</option>
              <option value="french">French</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <FooterComponent />
    </>
  );
}




export default UserForm;
