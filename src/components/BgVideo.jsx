import myVideo from '../assets/car-video.mp4'

export default function Background() {
  return (
    <div>
  
  {/* <video id="background-video" muted loop autoPlay>
    
      <source src={myVideo} type="video/mp4" />
      
  </video> */}
  <img id="background-video" src='https://images.pexels.com/photos/7549074/pexels-photo-7549074.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
  </div>
  )
}