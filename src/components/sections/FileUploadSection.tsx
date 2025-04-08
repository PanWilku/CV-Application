import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type dropZoneProps = {
    setImage: React.Dispatch<React.SetStateAction<any>>
}


function MyDropzone({setImage}: dropZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(acceptedFiles)
  }, [setImage])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p className='text-center'>Click or drop your picture here</p>
      }
    </div>
  )
}
export default MyDropzone