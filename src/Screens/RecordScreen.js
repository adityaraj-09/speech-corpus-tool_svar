import React from 'react'
import { useEffect, useState } from "react";
import HeaderComponent from '../Components/HeaderComponent'
import Container from '@mui/material/Container'
import Box from '@mui/system/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Alert } from '@mui/material'
import { AlertTitle } from '@mui/material'
import { db, storage } from '../Providers/firebase'
import MicRecorder from 'mic-recorder-to-mp3';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import FooterComponent from '../Components/FooterComponent';
import audioBufferToWav from 'audiobuffer-to-wav';
import UserForm from './userFormScreen';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
const { v4: uuidv4 } = require('uuid');

// Initilize the recorder
const Mp3Recorder = new MicRecorder({
  bitRate: 64,
  prefix: "data:audio/wav;base64,",
});


var list = ["m", "l"]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

shuffleArray(list)

// const list = shuffleArray(letters)
console.log("list")
console.log(list)


export default function RecordScreen() {
  // State Declaration
  const [isRecording, setIsRecording] = React.useState("")
  const [blobURL, setBlobURL] = React.useState(null)
  const [isBlocked, setIsBlocked] = React.useState(false)
  const [hasRecorded, setHasRecorded] = React.useState("")
  const [recordedData, setRecordedData] = React.useState(null)
  const [uploadProgress, setUploadProgress] = React.useState(0)
  const [randomWord, setRandomWord] = React.useState(null)
  const [hasRandomWordLoaded, setHasRandomWordLoaded] = React.useState(false)
  const [randomWordDocumentID, setRandomWordDocumentID] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const [runInterval, setRunInterval] = React.useState(false)
  const [audioUrl, setaudioUrl] = React.useState(null)
  // const [count, setCount] = React.useState(0)
  const [docLength, setdocLength] = React.useState(0)
  const [submittedForm, setSubmitted] = React.useState(false)
  const [random_index, setRandomIndex] = React.useState(0)
  const [presentrecord, setpresent] = React.useState("")
  const [listobject, setListObject] = React.useState({})
  var [currentletter, setCurrentLetter] = React.useState("")
  const [done, setDone] = React.useState(0)
  const [recordedObject, setRecordedObject] = React.useState({})


  // console.log(Object.keys(recordedObject).length == Object.keys(listobject).length)
  // console.log(Object.keys(recordedObject).length)
  // console.log(Object.keys(listobject).length)

  




  // async function FetchRandomWord() {
  //   db.collection('words').onSnapshot(snapshot => {
  //     // Set Random Word
  //     let randomID = Math.floor(Math.random() * snapshot.docs.length)
  //     setRandomIndex(randomID);
  //     let randomWord = snapshot.docs[randomID].data()
  //     let randomWordDocumentID = snapshot.docs[randomID].id
  //     setdocLength(snapshot.docs.length)
  //     setRandomWordDocumentID(randomWordDocumentID)
  //     setRandomWord(randomWord)
  //     setHasRandomWordLoaded(true)
  //     // setCount(count + 1);

  //   })
  // }





  // async function FetchRandomWord() {
  //   db.collection('words').onSnapshot(snapshot => {
  //     // Set Random Word
  //     let randomID = Math.floor(Math.random() * snapshot.docs.length)
  //     setRandomIndex(randomID);
  //     let randomWord = snapshot.docs[randomID].data()
  //     let randomWordDocumentID = snapshot.docs[randomID].id
  //     setdocLength(snapshot.docs.length)
  //     setRandomWordDocumentID(randomWordDocumentID)
  //     setRandomWord(randomWord)
  //     setHasRandomWordLoaded(true)
  //     // setCount(count + 1);

        })

        setListObject(listobject)
        console.log("listobject")
        console.log(listobject)
        console.log(Object.keys(listobject).length)
        setHasRandomWordLoaded(true)
      }

  async function fetchWord(n) {
    listwords.clear()
    db.collection("words").onSnapshot(snapshot => {

<<<<<<< HEAD

      snapshot.docs.forEach(data => {

        const pattern = /^r\//;
        if (data.data().word.startsWith(list[n])) {
         listwords.add(data.data());

        }
=======
      console.log("done")
      console.log(done)
>>>>>>> ce35977d6e70cef62394066ff1b203473439c77a


      if (done < list.length){
        currentletter = list[done]

<<<<<<< HEAD
      
=======
        const pattern = new RegExp(`^${currentletter}/`);

        snapshot.docs.forEach(data => {
          if (pattern.test(data.data().word)) {
            listobject[data.data().word] = data.data().url? data.data().url : ""
          }


        })

        setListObject(listobject)
        console.log("listobject")
        console.log(listobject)
        console.log(Object.keys(listobject).length)
        setHasRandomWordLoaded(true)
      }

      // setCount(count + 1);
>>>>>>> ce35977d6e70cef62394066ff1b203473439c77a
    })
  }

  function Cards() {
    
<<<<<<< HEAD
    const array=Array.from(listwords)
    console.log('nkn')
=======
    const array = Object.keys(listobject).map(key => ({
      word: key,
      url: listobject[key]
  }));
>>>>>>> ce35977d6e70cef62394066ff1b203473439c77a
    return (<div className="list_cards" style={{ display: 'flex', flexDirection: "column", gap: 20 }}>
      {
      array.map((word) => {

        return (
          
          <Paper sx={{ p: 6, textAlign: 'center' }} elevation={3} key={word.word} >

            <p>Press Speak Button and then read the word/sentence in bold.</p>
            <h1>{word.word}</h1>
            {
              (hasRecorded == word.word || (recordedObject[word.word] != null && recordedObject[word.word])  ) ? (
                ((uploadProgress == 100 && presentrecord == word.word) || recordedObject[word.word]) ? (
                  <>
                    <Box sx={{ textAlign: 'left' }}>

                      <Alert severity="success">
                        <AlertTitle>Thank You.</AlertTitle>
                        We Recorded the Audio for this word Successfully, Please Click on the Next Button to Load the Next Word.
                      </Alert>

                      {/* <Button sx={{ mt: 4 }} style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins' }}>
                        Next Word
                      </Button> */}
                    </Box>

                  </>
                ) : (
                  <>
                    <Box sx={{ textAlign: 'left' }}>
                      <Alert severity="warning">
                        <AlertTitle>Your Audio has been recorded.</AlertTitle>
                        Listen the audio and then press the confrim button to submit your audio.

                        <Box sx={{ mt: 2, mb: 4 }}>

                          <audio id={word.word} style={{ display: 'none' }} src={blobURL} controls />

                          <Button onClick={() => ListenRecording(word.word)} variant="contained" color='secondary'>Listen Recording</Button>

                        </Box>
                        {
                          (uploadProgress == 0 &&  presentrecord== word.word) ? (
                            <>
                              <Button sx={{ m: 1 }} onClick={()=>UploadToDatabase(word.word)} disabled={isUploading} variant='contained'>Confirm and Upload</Button>
                              <Button sx={{ m: 1 }} onClick={DiscardRecording} disabled={isUploading} variant='outlined' color="error">Record Again</Button>

                            </>

                          ) : (
                            <>
                              <LinearProgress variant="determinate" value={uploadProgress} />

                              {/* <Button sx={{ mt: 4 }} style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins' }}>
                                Next Word
                              </Button> */}
                            </>
                          )
                        }
                      </Alert>
                    </Box>
                  </>
                )
              ) : (
                (isRecording != word.word) ? (
                  <>
<<<<<<< HEAD
                    <audio style={{ display: 'none' }} id={word.word} src={word.url} controls></audio><br />
                    <Button onClick={()=>ListenRecording(word.word)} variant='outlined' color="success" style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins', color: '#008000', margin: "10px" }}>
                      <KeyboardVoiceIcon />
                      Listen Model Voice
=======
                    <audio style={{ display: 'none' }} id='fetchAudio' src={word.url} controls></audio><br />
                    <Button onClick={ListenRecordin} variant='outlined' color="success" style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins', color: '#008000', margin: "10px" }}>
                      <VolumeUpIcon />
                      Listen
>>>>>>> ce35977d6e70cef62394066ff1b203473439c77a
                    </Button>
                    <Button onClick={() => start(word.word)} variant='outlined' color='error' style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins', color: '#dc3545' }}>
                      <KeyboardVoiceIcon />
                      Speak Now
                    </Button> <br />
                    {/* <Button sx={{ mt: 4 }} style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins' }}>
                      Next Word
                    </Button> */}
                  </>
                ) : (
                  <Button onClick={() => stopFunction(word.word)} variant='contained' color='error' style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins', color: '#fff' }}>
                    <KeyboardVoiceIcon />
                    Stop Recording
                  </Button>
                )
              )
            }
          </Paper>
        )
      })
      
      
      }

    </div>

    
    
    
  useEffect(() => {
    // Get Words List From Database
    
    fetchWord()
    
    navigator.getUserMedia({ audio: true },
      () => {
        setIsBlocked(false);
      },
      () => {
        alert('Access to Microphone Is Blocked. Please Allow Access to Microphone in Settings.');
        setIsBlocked(true);
      },
    );

  }, [done])


  // Start Recording Function
  function start(a) {
    setpresent(a)
    setUploadProgress(0)
    setIsUploading(false)
    DiscardRecording()
    if (isBlocked) {
      alert('Access to Microphone Is Blocked. Please Allow Access to Microphone in Settings.');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setIsRecording(a);
         
        }).catch((e) => console.error(e));
    }
  };
  // async function fetchAudio() {
  //   const ref = db.collection('audiometadata');
  //   const snapshot = (await ref.get()).docs[random_index].data();
  //   setaudioUrl(snapshot.url);

  //   ListenRecordin();
  // }
  async function ListenRecordin() {
    let audio = document.getElementById('fetchAudio');
    audio.play()
  }

  // Stop Recording Functin
  async function stopFunction(a) {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        const binaryString = btoa(blobURL)
        setBlobURL(blobURL)
        setIsRecording("")
        const audio = new Audio(blobURL)
        setRecordedData(blob)
        setHasRecorded(a)
      })
      .catch((e) => console.error(e));
  }

  // Discard Recording and Nullify all states
  const DiscardRecording = () => {
    setIsUploading(false)
    setIsRecording("")
    setHasRecorded("")
    setBlobURL(null)
    setRecordedData(null)

  }

  
  async function UploadToDatabase(a) {
    
    setIsUploading(true)
    let blob = recordedData
    const uploadTask = storage.ref(`audios/${a}/${new Date().getTime()}`).put(blob)

    uploadTask.on('state_changed',
      (snapshot) => {
        // progress function
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setUploadProgress(progress)
      },
      (error) => {
        // error function

      },
       () => {
        // complete function
        storage.ref(`audios/${a}/`).child(uploadTask.snapshot.ref.name).getDownloadURL().then(async url => {
          db.collection('audiometadata').add({
            url: url,
            word: a,
            recorder: id
          })



          const docRef = db.collection('recorders').doc(id);

          try {
            var new_list = {
              ... docRef.recordingURLs,
             }

             new_list[a] = url
             docRef.update(
             { recordingURLs :new_list}
             );
            console.log('Document updated successfully!');
          } catch (error) {
            console.error('Error updating document:', error);
          }
          var docid=""
          var query = db.collection("words").where("word", "==", a);
        (await query.get()).forEach((data) => {
            docid=data.id
          })



          const ref=db.collection("words").doc(docid)
          
          ref.update({url:url}
            ).then(() => {
              
            setIsUploading(false)
            console.log("repeat")

            recordedObject[a] = true
  
            setRecordedObject(recordedObject)

            console.log("recordedObject")
            console.log(recordedObject)
            console.log(Object.keys(recordedObject).length)

            recordedObject[a] = true
  
            setRecordedObject(recordedObject)

            console.log("recordedObject")
            console.log(recordedObject)
            console.log(Object.keys(recordedObject).length)
            
          })


        })
      }
    )
  }



  // Load Next Word Function - 
  async function LoadNextWord() {
    setUploadProgress(0)
    DiscardRecording()
    setDone(done+1)
    setRecordedObject({})
    setListObject({})
    await fetchWord()
  }

  // Listen to Recording By User
  async function ListenRecording(a) {
    let audio = document.getElementById(a)
    audio.play()
  }


  // Turn off recording after 10 Seconds
  var [id, setid] = React.useState("")


  const [formData, setFormData] = useState({
    uuid: "",
    Name: '',
    NativePlace: '',
    email: '',
    gender: '',
    age: '',
    economicBackground: '',
    dialects: '',
    speechProblems: '',
    previousSpeechProblems: '', // New field for previous speech problems
    recordingURLs: {}
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    let newValue = value;

    if (type === 'checkbox') {
      newValue = formData[name] === value ? '' : value;
    } else if (type === 'select') {
      newValue = value;
    } else if (type === "radio") {
      newValue = value
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();


    var new_uuid = uuidv4()


    formData.uuid = new_uuid;

    db.collection("recorders").add(formData);
    const ref = db.collection('recorders');

    setSubmitted(true);
    var query = db.collection("recorders").where("uuid", "==", new_uuid);
    (await query.get()).forEach((data) => {
      setid(data.id)
    })

  };

  async function Refresh() {
    window.location.reload();
  }

  return (

    hasRandomWordLoaded ? (
      <>
        <HeaderComponent />

        {/* Recording Container With Top margin in center card box */}
        {!submittedForm ? <div className="form">
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
        </div> :

          <Container>
            <Container maxWidth="sm" sx={{ mt: 10, }}>


              {list.length == done ? <>
                {/* <div className="card"> */}
                  <div className="card-body" style = {{justifyContent: "center", position: "relative", alignItems: "center"}} >
                    <h5 className="card-title">Success!</h5>
                    <p className="card-text">All voice samples have been recorded</p>
                    
                    <Button sx={{ mt: 4 }} onClick={Refresh} style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins', left: "50%", transform: "translate(-50%,0)"    }} variant='outlined'>
                        New Session
                      </Button>
                    
                  </div>
                {/* </div> */}
              </> :
              <div style = {{justifyContent: "center", position: "relative", alignItems: "center"}}>
                <Cards />
                <Button sx={{ mt: 4 }} onClick={LoadNextWord} style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins', left: "50%", transform: "translate(-50%,0)"    }} disabled={(Object.keys(recordedObject).length == Object.keys(listobject).length)} variant='outlined'>
                        Next Word
                      </Button>
              </div>

              }


            </Container>

            <div className="next_pre">
            {(count==0 || count==list.length)?<div></div>:

            <div className="next">
              <Button  style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins',color:"#fff" }} onClick={prev_page}>
                      Previous Word
                    </Button>
                    
                    
                    </div>
            }
            {count==list.length ?<div></div>:

            <div className="next"><Button  style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Poppins',color:"#fff" }} onClick={next_page}>
                      Next Word
                    </Button>
                    
                    
                    </div>
            }
            </div>
          </Container>}

        <Box sx={{ mt: 6 }} >
          <FooterComponent />
        </Box>

      </>
    ) : (<><Container maxWidth="sm" sx={{ mt: 10, }}>
      <Paper sx={{ p: 6, textAlign: 'center' }} elevation={0}>
        <CircularProgress />
        <p>Loading...</p>
      </Paper>

    </Container>
      <Box sx={{ mt: 6 }} >
        <FooterComponent />
      </Box>
    </>
    )
  );
}
