import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
import axieGG from '../public/arena.png'
import { saveAs } from 'file-saver';
const Home: NextPage = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null)


useEffect(() => {
  
function cropImage( newX: number, newY: number, newWidth: number, newHeight: number) {

  console.log(canvasRef.current)
    // const originalImage = document.createElement('img');
    const originalImage = new (window as any).Image()
    // originalImage.src = '/soon.jpg'
    originalImage.src = axieGG.src
    originalImage.onload = function (){
      if(canvasRef.current && canvasRef.current.width && canvasRef.current.height){
        const ctx = canvasRef.current.getContext('2d');
        canvasRef.current.width = newWidth;
        canvasRef.current.height = newHeight;
        ctx?.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight); 
  
        const imageURL = canvasRef.current.toDataURL("image/jpeg", 0.9);
        saveAs(imageURL, "image.jpg");
      }
    }
}
cropImage(0, 0, 200, 200);
}, [])

// const link = document.createElement('a')
// link.href = imageURL
// link.download = 'image file name here'
// document.body.appendChild(link)
// link.click()
// document.body.removeChild(link)

  return (
    <div className={styles.container}>
      Crop Image
      <canvas ref={canvasRef} style={{ display:'none' }} ></canvas>
    </div>
  )
}

export default Home
