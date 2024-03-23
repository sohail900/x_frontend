import React, { ChangeEvent, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaFileImage } from 'react-icons/fa6'

const Stage3: React.FC<FormikPropsStage2<string>> = ({
    setFieldValue,
    values,
    error,
}) => {
    ////        SET HOOK --- PREVIEW IMAGE URL
    const [preview, setPreview] = useState<string | null | ArrayBuffer>(null)
    ////        ONCHANGE HANDLER
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const fileData = e.target.files as FileList
        setFieldValue?.('files', fileData[0])
        ////    CONVERT IMAGE FILE INTO URL && PREVIEW IMAGE
        const render = new FileReader()
        render.readAsDataURL(fileData[0])
        render.onload = () => {
            setPreview(render.result)
        }
    }
    //TODO:  REMOVE PREVIEW IMAGE AND SET STATE VALUE TO NULL
    const removeImage = () => {
        setPreview(null)
    }
    return (
        <>
            <section className='userProfileSection'>
                {/*   SHOW INPUT FIELD IF PREVIEW === NULL  */}
                {!preview && (
                    <label htmlFor='imageFile' className='uploadFile'>
                        <input
                            type='file'
                            id='imageFile'
                            name='files'
                            required
                            onChange={onChangeHandler}
                            placeholder='image'
                            accept='image/png , image/jpeg , image/gif , image/svg'
                            className={error.files && 'showError'}
                        />
                        <span className='content'>
                            <p className='icon'>
                                <FaFileImage />
                            </p>
                            <p className='text'>Click to upload image</p>
                        </span>
                    </label>
                )}
                {/* SHOW OR PREVIEW IMAGE IF (PREVIEW && VALUES.FILES !== NULL)  */}
                {values.files && preview && (
                    <>
                        <div className='showImage'>
                            <img src={preview as string} alt='preview' />
                            <button
                                type='button'
                                className='deleteImage'
                                onClick={removeImage}
                            >
                                <RiDeleteBin6Line className='icon' />
                            </button>
                        </div>
                        <p className='imageName'>{values?.files[0]?.name}</p>
                    </>
                )}
            </section>
        </>
    )
}

export default Stage3
