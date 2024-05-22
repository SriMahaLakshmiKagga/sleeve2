import './App.css';
import React from 'react';
import Container2Image from "./Components/Images/SWIOContainer2Photo1.png"
import ContainerchangeItUpImage from "./Components/Images/Container3-SubDiv1-changeItUp-Image.png"
import ContainerShareableImage from "./Components/Images/Container3-SubDiv1-Shareable-Image.png"
import Container4Image from "./Components/Images/Container4-SubDiv2-Image.png"
import ContainerArtWorkImage from "./Components/Images/Container5-SubDiv2-ArtWork-Image.png"
import ContainerTypographyImage from "./Components/Images/Container5-SubDiv4-Typography-Image.png"
import ContainerInterfaceImage from "./Components/Images/Container5-SubDiv6-Interface-Image.png"
import ContainerSettingsImage from "./Components/Images/Container5-SubDiv8-Settings-Image.png"

function App() {
  return (
    <div className="Main-Container">


      <div className="Container1">
        <h1 style={{ height: "25%", fontSize: "70px" }}>Sleeve2</h1>
        <h2>The ultimate music accessory for your Mac.</h2>
        <p>Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in Apple Music, Spotify, and Doppler.</p>
        <div className='Container1-SubDiv1-Buttons'>
          <button className='btn'>Mac App Store</button>
          <button className='btn'> Buy Directly</button>
        </div>
      </div>


      <div className="Container2">
        <h2 style={{ fontSize: "50px" }}>Themes. Unlimited themes.</h2>
        <p style={{ fontSize: "20px" }}>Themes in Sleeve make creating and switching between customizations easy.<br /> Share your own creations with friends and install as many themes as you like with just a double-click.</p>
        <div className='Container2img'> <img style={{ height: "100%", width: "100%" }} src={Container2Image} alt=''></img> </div>
      </div>


      <div className="Container3">
        <div className='Container3-SubDiv1-changeItUp'>
          <div className='Container3-SubDiv1-changeItUp-Paragraph'>
            <h3 style={{ fontSize: "25px" }}>Change it up</h3>
            <p style={{ fontSize: "20px" }}>Switch between themes with just a click.<br />
              <br />Modify the built-in themes or create your own using Sleeve’s <br />extensive preferences.</p>
          </div>
          <div className='Container3-SubDiv1-changeItUp-Image'>
            <img style={{ height: "100%", width: "100%" }} src={ContainerchangeItUpImage} alt='' />
          </div>
        </div>
        <div className='Container3-SubDiv2-Shareable'>
          <div className='Container3-SubDiv1-Shareable-Paragraph'>
            <h3 style={{ fontSize: "25px" }}>Shareable</h3>
            <p style={{ fontSize: "20px" }}>Export your themes and share them with friends using the handy new <br /><br />Sleeve Theme file format.<br />Install themes from anywhere with a double-click or a drag and drop.</p>
          </div>
          <div className='Container3-SubDiv1-Shareable-Image'>
            <img style={{ height: "100%", width: "100%" }} src={ContainerShareableImage} alt='' />
          </div>
        </div>
      </div>


      <div className="Container4">
        <div className='Container4-SubDiv1-Paragraph'>
          <h1 style={{ fontSize: "50px" }}>Countless ways to customize.</h1>
          <p style={{ fontSize: "20px" }}>Customization is at the core of the Sleeve experience <br /> choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</p>
        </div>
        <div className='Container4-SubDiv2-Image'>
          <img style={{ height: "100%", width: "100%" }} src={Container4Image} alt='' />
        </div>
      </div>

      <div className='Container5-1'> 
      <div className="Container5">

<div className="Container5-SubDiv1-ArtWork">
  <h2 style={{ fontSize: "50px" }}>Artwork</h2>
  <p style={{ fontSize: "25px" }}>Scale artwork all the way up or all the way down.
    <br />Round the corners or leave them square.<br/><br/>Choose shadow and lighting effects to bring your album artwork to life.Or hide it completely.</p>
</div>
<div className="Container5-SubDiv2-ArtWork-Image">
  <img style={{height:"100%",borderRadius: "6%" }} src={ContainerArtWorkImage} alt='' />
</div>
</div>

<div className="Container6">
  <div className="Container5-SubDiv3-Typography">

    <h2 style={{ fontSize: "50px" }}>Typography</h2><br />
    <p style={{ fontSize: "25px" }}> Pick the track info you want to display, and then exactly how to display it.<br /><br/>
      Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</p>
  </div>
  <div className="Container5-SubDiv4-Typography-Image">
    <img style={{height: "100%", width: "100%" }} src={ContainerTypographyImage} alt='' />
  </div>
</div>

<div className="Container7" >
  <div className="Container5-SubDiv5-Interface">

    <h2 style={{ fontSize: "50px" }}>Interface</h2><br />
    <p style={{ fontSize: "25px" }}> Customize the layout, alignment and position to fit your setup.Show and hide playback controls. <br/><br />Add a backdrop layer and customize it.</p>
  </div>
  <div className="Container5-SubDiv6-Interface-Image">
    <img style={{height: "100%", width: "100%" }} src={ContainerInterfaceImage} alt='' />
  </div>
</div>

<div className="Container8" >
  <div className="Container5-SubDiv7-Settings" >

    <h2 style={{ fontSize: "50px" }}>Settings</h2><br />
    <p style={{ fontSize: "25px" }}>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.<br />Show it in the Dock, choose from custom icons, or keep it on the Desktop only.<br />
    <br/>Set your custom keyboard shortcuts and integrate with the apps you use.</p>
  </div>
  <div className="Container5-SubDiv8-Settings-Image">
    <img style={{height: "100%", width: "100%" }} src={ContainerSettingsImage} alt='' />
  </div>
</div>
      </div>
    
     <div className="Container9">
        <h5>INTEGRATIONS</h5>
        <h1>Like, Scrobble.</h1>
      </div>
    </div>
  );
}

export default App;
