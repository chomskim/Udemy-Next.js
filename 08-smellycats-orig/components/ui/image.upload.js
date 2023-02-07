import axios from 'axios'
import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
// import Image from 'next/image'

const UploadHandler = forwardRef((props, ref) => {
  const imageInputRef = useRef()
  const [createObjectURL, setCreateObjectURL] = useState(null)

  useImperativeHandle(ref, () => ({
    clearPic() {
      imageInputRef.current.value = ''
      setCreateObjectURL(null)
    },
  }))

  const showImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imgFile = event.target.files[0]
      setCreateObjectURL(URL.createObjectURL(imgFile))
      uploadImage(imgFile)
    }
  }

  const uploadImage = async (imgFile) => {
    const body = new FormData()
    body.append('file', imgFile)

    try {
      const request = await axios.post('/api/uploads/image', body)
      props.picValue(request.data.filename)
    } catch (error) {
      console.log(error)
    }
  }

  //// edit ///
  useEffect(() => {
    if (props.prevImage) {
      setCreateObjectURL(`/images/venues/uploads/${props.prevImage}`)
    }
  }, [])
  /// edit ///

  return (
    <div className='file-uploader'>
      {/* <Image src={createObjectURL} layout='responsive' width='1920' height='1080' /> */}

      <img src={createObjectURL} />
      <div className='form-group'>
        <input type='file' name='myImage' ref={imageInputRef} onChange={showImage} />
      </div>
    </div>
  )
})

export default UploadHandler
