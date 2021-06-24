import React from 'react'

const SocialButtonsBar = () => {
    return (
        <div className = 'socialButtonBarHidden'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="icon-bar">
                <a href="https://www.facebook.com/EmilianTeo/" class="facebook" target='_blank'><i class="fa fa-facebook"></i></a> 
                <a href="https://twitter.com/EmilianTeodor" class="twitter" target='_blank'><i class="fa fa-twitter"></i></a> 
                <a href="https://www.instagram.com/emilu.teo/" class="instagram" target='_blank'><i class="fa fa-instagram"></i></a> 
                <a href="https://www.linkedin.com/in/emilian-teodor-rotaru-550963197/" class="linkedin" target='_blank'><i class="fa fa-linkedin"></i></a>
                <a href="https://www.youtube.com/channel/UCatqZnUMMSwzVTZ8xhSJt-w" class="youtube" target='_blank'><i class="fa fa-youtube"></i></a> 
            </div>
        </div>
    )
}

export default SocialButtonsBar
