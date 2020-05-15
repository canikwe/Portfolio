import React from 'react'

const Bio = () => {
  return (
    <div id='bio'>
      <img id='profile' alt='profile' src={require('../images/about/profile-img.jpg')} />
      <p>My name is <strong>Chine Anikwe</strong>, and I'm a Full Stack Web Developer with a passion for using tech to solve problems. Currently working for Flatiron School as a Software Engineering Coach, I get to connect with beginner developers every day and dive into programming fundamentals. Also, I like corny jokes. A lot.</p>
    </div>
  )
}

export default Bio