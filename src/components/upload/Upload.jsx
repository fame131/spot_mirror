import React, { useEffect, useRef, useState } from 'react'
import './upload.css'
import { v4 } from 'uuid'
import { supabase } from '../../supabase'
import { CircleAlert, CheckCircle } from 'lucide-react'
import axios from 'axios'

const Upload = ({ userName, setGroups, groups }) => {

  const fileInput = useRef(null)
  const fileRef = useRef(null)

  const [preview, setPreview] = useState(null)
  const [trackName, setTrackName] = useState('')
  const [description, setDescription] = useState('')
  const [track, setTrack] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [error, setError] = useState('')
  const [errorList, setErrorList] = useState(false)

  const handleClick = () => fileInput.current.click()
  const handleTrack = () => fileRef.current.click()

  const handleChange = (event) => {
    const file = event.target.files[0]
    setImageFile(file)

    if (!file) {
      setPreview(null)
      return
    }

    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
  }

  const handleTrackChange = (event) => {
    const audioFile = event.target.files[0]
    if (!audioFile) return
    setTrack(audioFile)
  }


  const handleUpload = async () => {

    if (!track || !imageFile || trackName.trim() === '') {
      setError(<><CircleAlert color='#c72525ff' className='warn' />
        please fill in all the fields..
      </>
      )
      setErrorList(true)
    }
    else if (!track) {
      setError(
        <>
          <CircleAlert color='#c72525ff' className='warn' />,
          choose a track
        </>
      )
    }
    else if (!imageFile) {
      setError(
        <>
          <CircleAlert color='#c72525ff' className='warn' />
          choose an image
        </>
      )
    }
    else if (!trackName.trim()) {
      setError(
        <>
          <CircleAlert color='#c72525ff' className='warn' />
          'give a name for the track'
        </>
      )
    }
    else {
      setError(
        <>
          <CheckCircle color='green' className='warn' />
          Uploaded succesfully
        </>
      )

      const res = axios.post('http://localhost:5000/upload-metadata', {
        trackName,
        description,
        trackURL: trackPublicUrl,
        coverURL: coverPublicUrl,
      })

    }

    const trackId = v4()

    const trackExt = track.name.split('.').pop()
    const coverExt = imageFile.name.split('.').pop()

    const trackNameInBucket = `track-${trackId}.${trackExt}`
    const coverNameInBucket = `cover-${trackId}.${coverExt}`


    const { error: trackError } = await supabase.storage
      .from('spotmirror')
      .upload(trackNameInBucket, track, {
        contentType: track.type || 'audio/mpeg'
      })

    if (trackError) {
      console.error(trackError)
      alert("Error uploading track.")
      return
    }


    const { error: imageError } = await supabase.storage
      .from('spotmirror')
      .upload(coverNameInBucket, imageFile, {
        contentType: imageFile.type
      })

    if (imageError) {
      console.error(imageError)
      alert("Error uploading cover.")
      return
    }

  }




  return (
    <div className='uploads'>
      <div className="own">Upload your own track</div>

      <div className="upload-stuffs">

        <div className="preview-image">
          <img src={preview} alt="" className="upload-img" />
        </div>

        <div className="preview-all">
          <div className="artist-name">Artist : {userName}</div>
          <div className="name-track">Track : {trackName}</div>
          <div className="date-upload">
            Date:&nbsp;
            {new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <div className="describe">Description : {description}</div>
        </div>

        <div className="all-inputs">

          <input type="file" ref={fileInput} style={{ display: 'none' }} accept='image/*' onChange={handleChange} />
          <input type="file" ref={fileRef} style={{ display: 'none' }} accept='audio/*' onChange={handleTrackChange} />

          <button className="upload-btn" onClick={handleClick}>Choose image</button>
          <button className="track-btn" onClick={handleTrack}>Choose track</button>

          <input type="text"
            className="track-name-input"
            placeholder="What is your track's name?.."
            onChange={(e) => setTrackName(e.target.value)}
          />

          <input type="text"
            className="description"
            placeholder="Write something about this song..."
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="upload-all" onClick={handleUpload}>Upload</button>

        </div>
      </div>
      <div className={errorList ? 'fade-in' : "error-upload"}>{error}</div>
    </div>
  )
}

export default Upload
