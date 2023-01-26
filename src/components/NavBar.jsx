// by nexy :)

import React, {useState} from 'react'

const NavBar = () => {
  const [darkNavbar, setDarkNavbar] = useState(false)
  const [notificationShow, setShowNotification] = useState(false)

  let isDarkText = ""
  let showNoti = ""

  function toggleDark () {
    setDarkNavbar(!darkNavbar)
    setShowNotification(true)
  }

  function disableNoti() {
    setShowNotification(false)
  }

  if (darkNavbar === false) {
    isDarkText = "LIGHT"
  }
  else {
    isDarkText = "DARK"
  }

  if(notificationShow === true)
  {
    showNoti = "visible"
  }
  else {
    showNoti= "hidden"
  }


  return (
    <div>
      {
        darkNavbar === false ? (
          <div>
            <header className='header'>
              {
                notificationShow === true ? <div className='header--notification-light' style={{visibility: `${showNoti}`}} onClick={disableNoti}>Pomyślnie zmieniono motyw tła 💡</div> : null
              }
              <img className='header--image' src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="Site by Nexy" />
              <h2 className='header--title'>Meme Generator</h2>
              <button className='header--toggle' onClick={toggleDark}>{isDarkText}</button>
              <h4 className='header--project'>Programmed by <a style={{color: 'white'}} href='https://www.youtube.com/@damianito/videos'>nexy</a> 💡</h4>
            </header>
          </div>
        ) : (
          <div>
            <header className='header--dark'>
              {
                notificationShow === true ? <div className='header--notification-dark' style={{visibility: `${showNoti}`}} onClick={disableNoti}>Pomyślnie zmieniono motyw tła 🌙</div> : null
              }
              <img className='header--image-dark' src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="Site by Nexy" />
              <h2 className='header--title-dark'>Meme Generator</h2>
              <button className='header--toggle-dark' onClick={toggleDark}>{isDarkText}</button>
              <h4 className='header--project-dark'>Programmed by <a style={{color: 'white'}}href='https://www.youtube.com/@damianito/videos'>nexy</a> 🌙</h4>
            </header>
          </div>
        )
      }
    </div>
  )
}

export default NavBar
