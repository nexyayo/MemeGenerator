import React, { useState } from 'react'
import memesData from '../data/memesData'
import 'bootstrap/dist/css/bootstrap.min.css';

const MemeInput = () => {
  // const [memeImage, setMemeImage] = useState("https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png");

  // Hook, który inicjalizuje domyślne wartości dla 'topText' - Gorny Text;
  // 'bottomText' - dolny Text i 'randomImage', który zawiera grafikę z placeholderem,
  // bo domyślnie chcemy, aby było to placeholderem, kiedy nie wygenerowaliśmy mema
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png",
  })

  const [alertSuccess, setAlertSuccess] = useState('hidden')

  function generateMeme () {  

    // Pobieramy dane z tablicy i zapisujemy je do zmiennej z pliku, który jest wyżej
    // ziimportowany
    const memesArray = memesData.data.memes;
    // Losujemy losową liczbę, która jest do zakresu danych z tablicy - ich ilości 
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    // Tutaj ustawiłem, że kiedy klikniemy button to widzimy powiadomienie
    setAlertSuccess('visible');


    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
      topText: "",
      bottomText: "",
    })) 
  }
  
  // To wyłączanie alertu jest trochę opóźnione, ale nie mam pojęcia dlaczego,
  // tak się dzieje, wiem, że inaczej mogłem to napisać, ale tak było dla mnie najłatwiej xd
  function disableAlert () {
    setAlertSuccess('hidden')
  }

  // W tej funkcji ustawiamy, poprzez event z inputa (onChange), wartość tego co wpisaliśmy
  // na wartość tego tekstu, który edytujemy aktualnie

  function handleChange (event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    
    <div>
      {/* Tutaj jest to wyłączanie alertu, które po kliknięciu jest trochę opóźnione */}
      <div className="alert--nexy" style={{visibility: `${alertSuccess}`}} role="alert">
      <span className='success--alert'>Pomyślnie wygenerowano obrazek ✅</span>
      <button className='close--image' onClick={disableAlert}>X</button>
      </div>
      <div className="form">
        <input type='text' placeholder='Top text' className='form--input' name='topText' value={meme.topText} maxlength="20" onChange={handleChange}/>
        <input type='text' placeholder='Bottom text' className='form--input' name='bottomText' value={meme.bottomText} maxlength="20" onChange={handleChange}/>
        <button onClick={generateMeme} className="form--button">Get a new meme image 💀</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} alt='Meme' className='meme--image'/>
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default MemeInput
