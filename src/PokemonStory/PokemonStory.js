import "./PokemonStory.css"

import {gsap} from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
export default function PokemonStory() {

    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) =>{
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
        
                }
            })
        })
    
    
        const hiddenElements = document.querySelectorAll('.story');
        hiddenElements.forEach((el) => observer.observe(el))
    })
    gsap.registerPlugin(ScrollTrigger)


    

    return (
        <div className="storyline">
            <div className="story-container">
                <div className="story">
                    <header>
                        <h3>February, 1996</h3>
                        <p>
                        “Pokémon Red Version and Pokémon Green Version” for the Game Boy are launched in Japan.
                        </p>
                        <img className="story-img" src="img/story-img/img-01.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>October, 1996</h3>
                        <p>
                        The Pokémon Trading Card Game is launched in Japan.
                        </p>
                        <img className="story-img" src="img/story-img/img-02.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>April, 1997</h3>
                        <p>
                        TV anime series “Pokémon” is launched on TV Tokyo in Japan.
                        </p>
                        <img className="story-img" src="img/story-img/img-03.jpg" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>July, 1998</h3>
                        <p>
                        “Pokémon The First Movie: Mewtwo Strikes Back” and “Pikachu’s Vacation” are launched in Japan.
                        </p>
                        <img className="story-img" src="img/story-img/img-05.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>September, 1998</h3>
                        <p>
                        The first TV anime series “Pokémon, I Choose You!” is launched with 111 TV broadcasting stations in U.S.
                        </p>
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>September, 1998</h3>
                        <p>
                        “Pokémon Red Version and Pokémon Blue Version” for the Game Boy are launched in U.S.
                        </p>
                        <img className="story-img" src="img/story-img/img-37.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>January, 1999</h3>
                        <p>
                        "Pokémon Card Game: Base Set" is launched in U.S.
                        </p>
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>November, 1999</h3>
                        <p>
                        “Pokémon Gold Version and Pokémon Silver Version” for the Game Boy are launched in Japan.
                        </p>
                        <img className="story-img" src="img/story-img/img-07.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>November, 1999</h3>
                        <p>
                        “Pokémon The First Movie” is launched in U.S.
                        </p>
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>November, 2002</h3>
                        <p>
                        “Pokémon Ruby Version and Pokémon Sapphire Version” for the Game Boy Advance are launched.
                        </p>
                        <img className="story-img" src="img/story-img/img-09.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>November, 2002</h3>
                        <p>
                        The Official Pokémon website is launched.
                        </p>
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>January, 2004</h3>
                        <p>
                        “Pokémon Daisuki Club” is launched.
                        </p>
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>March, 2005</h3>
                        <p>
                        “Pokémon The Park 2005” is opened for a limited time at the satellite venue of EXPO 2005 AICHI JAPAN.
                        </p>
                        <img className="story-img" src="img/story-img/img-11.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>September, 2006</h3>
                        <p>
                        “Pokémon Diamond Version and Pokémon Pearl Version” for the Nintendo DS are launched.
                        </p>
                        <img className="story-img" src="img/story-img/img-13.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>August, 2009</h3>
                        <p>
                        The first official tournament “Pokémon World Championships 2009” is held.
                        </p>
                        <img className="story-img" src="img/story-img/img-15.jpg" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>September, 2010</h3>
                        <p>
                        “Pokémon Black Version and Pokémon White Version” for the Nintendo DS are launched.
                        </p>
                        <img className="story-img" src="img/story-img/img-16.jpg" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>October, 2013</h3>
                        <p>
                        “Pokémon X and Pokémon Y” for the Nintendo 3DS are launched worldwide simultaneously for the first time.
                        </p>
                        <img className="story-img" src="img/story-img/img-19.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>July, 2016</h3>
                        <p>
                        “Pokémon GO” is released.
                        </p>
                        <img className="story-img" src="img/story-img/img-25.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>November, 2016</h3>
                        <p>
                        “Pokémon Sun and Pokémon Moon” for the Nintendo 3DS are launched.
                        </p>
                        <img className="story-img" src="img/story-img/img-27.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>May, 2019</h3>
                        <p>
                        The first Hollywood movie, “POKÉMON Detective Pikachu” is released.
                        </p>
                        <img className="story-img" src="img/story-img/img-32.png" />
                    </header>
                </div>
                <div className="story">
                    <header>
                        <h3>January, 2022</h3>
                        <p>
                        “Pokémon Legends: Arceus” for the Nintendo Switch is launched.
                        </p>
                        <img className="story-img" src="img/story-img/img-44.png" />
                    </header>
                </div>
            </div>
        </div>
    )
}