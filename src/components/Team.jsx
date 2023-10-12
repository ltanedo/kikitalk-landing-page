import Person from './Person'

import microphone from "../images/microphone.png"
import translate from "../images/translate.png"
import accessability from "../images/accessability.png"
// import Mikee from "../images/Mikee.png"


export default function(props) {
    return (
      <div class="container my-3 py-5 text-center"> 

    <div className='container my-3 py-5 text-center'>
        <h1>Features</h1>
        <p>Our goal is to connect many languages and cultures!</p>
      </div>

        <div class="row mb-5">
      
            <div class="row" id='team'>
            <Person 
              image={microphone}
              name={"Voice Recognition"}
              //       role={"The Finisher"}
              description={
                     "Press, Speak, and Let Go! Use your voice to translate in different languages (more in v2)"
                     }/>
             <Person image={translate}
              name={"Fast Translation"}
              //       role={"The Spirit"}
              description={"Using modern APIs and techniques, our app ensures fast translation down to the second."}/>
             <Person image={accessability}
              name={"Accessability"}
              //       role={"The Chad"}
              description={"Use red for English and blue for Chinese! Our app is localized for your language!"}/>
             

        </div>
        </div>
        </div>
    )
}