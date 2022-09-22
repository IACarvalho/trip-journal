import './BackgroundImage.css'

export default function BackgroundImage({children}) {
  return (
    <div className='background'>
      {children}
    </div>
  )
}