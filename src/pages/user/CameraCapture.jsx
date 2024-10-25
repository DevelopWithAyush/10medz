import React, { useRef, useEffect, useState } from 'react';
import { GalleryImage, RxPage, Xmark } from '../../assets/image';
import { useNavigate } from 'react-router-dom';

const CameraCapture = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [imageData, setImageData] = useState(null);
    const [modal, setModal] = useState(false);
    const [desiredWidth, setDesiredWidth] = useState(1080);  // Default width
    const [desiredHeight, setDesiredHeight] = useState(1920);  // Default height
    console.log(modal)
    console.log(imageData)

    useEffect(() => {
        const getCameraStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing the camera:", error);
            }
        };

        getCameraStream();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        if (canvas && video) {
            const context = canvas.getContext('2d');
            canvas.width = desiredWidth;
            canvas.height = desiredHeight;
            context.drawImage(video, 0, 0, desiredWidth, desiredHeight);

            const imageUrl = canvas.toDataURL('image/png');
            setImageData(imageUrl);  // Save the captured image as a data URL
            setModal(true);  // Open modal after capturing image
        }
    };

    const closeModal = () => {
        setModal(false);  // Close the modal
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col h-screen">
            <header className='fixed top-0 left-0 flex flex-row items-center justify-between w-full px-5 py-[16px]'>
                <p className='text-[14px] font-pmedium_500 text-[#101010]'>Take a picture of your prescription</p>
                <button onClick={handleBack}>
                    <Xmark />
                </button>
            </header>

            <div className="relative  w-full mt-[57px] max-h-[calc(100vh-165px)]  z-20  bg-black overflow-hidden rounded-lg shadow-lg" style={{aspectRatio:9/16}}>
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-4 border-4 border-lime-500 pointer-events-none"></div> {/* Green border */}
            </div>

            <div className='px-5 py-[10px] fixed bottom-0 left-0 w-full'>
                <div className="px-5 py-[10px] rounded-[10px] flex flex-row items-center border-[1px] border-solid border-[#DFE7F2] justify-between mt-4" style={{ boxShadow: "0px 4px 5px 0px rgba(255, 233, 192, 0.40)" }}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 40 45" fill="none">
                            <path d="M3.75 29.0234L12.3484 19.5652C13.8128 17.9543 16.1872 17.9543 17.6517 19.5653L26.25 29.0234M23.75 26.2734L26.0984 23.6903C27.5628 22.0793 29.9372 22.0793 31.4017 23.6903L36.25 29.0234M6.25 35.8984H33.75C35.1307 35.8984 36.25 34.6672 36.25 33.1484V11.1484C36.25 9.62965 35.1307 8.39844 33.75 8.39844H6.25C4.86929 8.39844 3.75 9.62966 3.75 11.1484V33.1484C3.75 34.6672 4.86929 35.8984 6.25 35.8984ZM23.75 15.2734H23.7625V15.2872H23.75V15.2734ZM24.375 15.2734C24.375 15.6531 24.0952 15.9609 23.75 15.9609C23.4048 15.9609 23.125 15.6531 23.125 15.2734C23.125 14.8937 23.4048 14.5859 23.75 14.5859C24.0952 14.5859 24.375 14.8937 24.375 15.2734Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        className="w-10 h-10 self-center bg-white border-[2px] border-gray-800 rounded-full hover:bg-gray-300 active:bg-gray-500 focus:outline-none transition-all"
                        onClick={captureImage}
                    ></button>
                    <button className='w-[40px] h-[40px] bg-[#D9D9D9] rounded-[5px]'></button>
                </div>
            </div>
            <canvas ref={canvasRef} className="hidden"></canvas>

            {modal  && <Modal  imageData={imageData} closeModal={closeModal} />}
        </div>
    );
};

const Modal = ({ imageData, closeModal }) => {
    return (
        <div className='z-[1001] fixed bottom-0 left-0 w-full h-[95vh]'>
            <div className='flex h-full flex-col items-start justify-start gap-2'>
                <div className='flex px-4 items-center justify-end w-full'>
                    <button className='flex flex-row items-center justify-end bg-white p-[5px] rounded-full' onClick={closeModal}>
                        <Xmark />
                    </button>
                </div>
                <div className='w-full flex flex-col items-start justify-normal bg-white h-[calc(100%-44px)] overflow-y-auto rounded-t-[20px]'>
                    <div className='flex flex-col items-start justify-start gap-2 px-9 py-6'>
                        <p className='text-[16px] font-psemibold_600 text-[#101010]'>
                            Upload picture?
                        </p>
                        <p className='text-[12px] font-pregular_400 text-[#101010]'>
                            Verify readability of the prescription. If the picture is blur or too dark, try retaking a picture.
                        </p>
                    </div>
                    <div className='flex items-center justify-center px-5 mt-6'>
                        <div className='flex flex-col items-center justify-center border-[1px] border-solid border-[#BCC3CD] rounded-[10px] overflow-hidden'>
                           <img className='w-full  ' style={{aspectRatio:3/4}} src={imageData} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col w-full self-end items-start justify-start px-5 mt-10 gap-6 pb-4'>
                        <button className='w-full flex flex-col items-center justify-center text-[16px] font-psemibold_600 py-2 text-primary border-[1px] rounded-[10px] border-solid border-primary'>Retake</button>
                        <button className='w-full flex flex-col items-center justify-center text-[16px] font-psemibold_600 py-2 text-[#FFF] bg-primary rounded-[10px]'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraCapture;
