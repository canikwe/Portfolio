import React from 'react'

const Bio = () => {
  return (
    <div id="bio">
      <img id="profile" alt="profile" src={require('../images/about/profile-img.jpg')} />
      <p>
        My name is <strong>Chine Anikwe</strong>, and I'm a Full Stack Web Developer with a passion for using tech to
        solve problems. Currently working for Zimba Technologies as a Founding Software Engineer, I get to deliver
        scalable, testable solutons for complex business requirements. Also, I like corny jokes. A lot.
      </p>
    </div>
  )
}

export default Bio
