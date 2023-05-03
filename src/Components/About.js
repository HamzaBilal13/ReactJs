import React from 'react'


export const About = () => {
  return (
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-6 p-45">
                    <h3>About us</h3>
                        <h1>Welcome to MAESTRO PIZINNI</h1>
                        <p>
                        Investigationes demonstraverunt lectores legere me lius quod ii
                        legunt saepius. Claritas est etiam processus dynaus, quise
                        sequitur mutationem consuetudium lectorum.
                        </p>
                        <div class="button">
                            <button class="btn">
                                <a href="">Read More</a>
                            </button>
                        </div>
                </div>
                <div class="col-6">
                    <img src="/img/Pizza.jpg"/>
                </div>
            </div>
        </div>
        

    </div>
  )
}


export default About;