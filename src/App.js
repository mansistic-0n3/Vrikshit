import './App.css';
// import {Faq} from './Faq'
import lead from '../src/Assets/leader.jpg'
import grl from '../src/Assets/girl.jpg'
import boy from '../src/Assets/boy.jpg'
import pk from '../src/Assets/perks.jpg'
import {BsFillCheckSquareFill} from 'react-icons/bs';

function App() {
  return (
    <div className="App space">

      <div className="listing event" style={{paddingLeft:'1rem', justifyContent:'space-around'}}>
      <div className='left mob'>
      <div className="smlHead" style={{textTransform:'unset', paddingBottom:'1rem', fontSize:'30px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="bigHead" style={{fontSize:'2.4rem'}}>
      <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
        <button className='btn space'>Apply Now</button>
       </div>
       <div className='right images'>
        <img className='grl' src={grl} alt=''/>
       </div>
       
      </div>

      {/* Perks and benefits */}
      <div className ="bg space">
      <div className="smlHead center">
      Perks & Benefits
      </div>
      <div className="bigHead center">
      <b>What will you get in</b><br/>
      our Campus Ambassador Internship?
      </div>
      <img className='perk' src={pk} alt=''/>
      </div>

      {/* Leadership Qualities */}
      <div className="smlHead center space">
      Leadership Qualities
      </div>
      <div className="bigHead center">
      <b>Who can apply for</b> our Campus Ambassador<br/>
      Programs?
      </div>
      <div className="listing lr space">
      <div className='left'>
       <img className='leader' src={lead} alt=''/>
       </div>
        <div className='right'>
       <div className='oneline'> <BsFillCheckSquareFill style={{color:'#06E5AF', padding:'1rem'}}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='oneline'> <BsFillCheckSquareFill style={{color:'#06E5AF', padding:'1rem'}}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='oneline'> <BsFillCheckSquareFill style={{color:'#06E5AF', padding:'1rem'}}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='oneline'> <BsFillCheckSquareFill style={{color:'#06E5AF', padding:'1rem'}}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='oneline'> <BsFillCheckSquareFill style={{color:'#06E5AF', padding:'1rem'}}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       </div>
      </div>

      {/* Event Announcement */}
      <div className="smlHead center" style={{marginTop:'14rem'}}>
      Event Announcement
      </div>
      <div className="bigHead center">
      <b>What will you do in</b><br/>
       Our Campus Ambassador Program?
      </div>
      <div className="listing lr event">
      <div className='left'>
       <div className='box'> 01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='box'> 01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='box'> 01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='box'> 01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       <div className='box'> 01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
       </div>
        <div className='right images'>
        <img className='grl' src={grl} alt=''/>
       </div>
      </div>

      {/* connections */}
      <div className ="bg lr space">
      <div className="smlHead center">
      connections
      </div>
      <div className="bigHead center">
      <b>Meet your fellow </b>campus ambassadors
      </div>
      <div className='conn space'>
      <div className='mem'>
        <img src={boy} alt=''/>
        <h2>ABC</h2>
        <h4 className='smlHead' style={{fontSize:'1em', textTransform:'unset'}}>xyz university</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodales massa. Ut sed eros luctus quam rutrum vehicula. Nulla non maximus lectus</p>
      </div>
      <div className='mem'>
        <img src={boy} alt=''/>
        <h2>ABC</h2>
        <h4 className='smlHead' style={{fontSize:'1em', textTransform:'unset'}}>xyz university</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodales massa. Ut sed eros luctus quam rutrum vehicula. Nulla non maximus lectus</p>
      </div>
      <div className='mem'>
        <img src={boy} alt=''/>
        <h2>ABC</h2>
        <h4 className='smlHead' style={{fontSize:'1em', textTransform:'unset'}}>xyz university</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodales massa. Ut sed eros luctus quam rutrum vehicula. Nulla non maximus lectus</p>
      </div>
      <div className='mem'>
        <img src={boy} alt=''/>
        <h2>ABC</h2>
        <h4 className='smlHead' style={{fontSize:'1em', textTransform:'unset'}}>xyz university</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodales massa. Ut sed eros luctus quam rutrum vehicula. Nulla non maximus lectus</p>
      </div>
      </div>
      </div>

      {/* faq */}
      <div className="smlHead center space">
      faq
      </div>
      <div className="bigHead center">
      <b>Frequently asked quetions</b>
      </div>
      {/* <Faq/> */}

    </div>
  );
}

export default App;
