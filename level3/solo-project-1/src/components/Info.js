import About from './About'
import Interests from './Interests'


export default function Info() {
  return (
    <main className="info--container">
      <h2>Steve Falvo</h2>
      <p>Web Development Student</p>
      <p><a href="https://stevefalvo.com" target="_blank"> stevefalvo.com</a></p>
      <div className="buttons">
        <button className='email-btn'>Email</button>
        <button className='linkedin-btn'>LinkedIn</button>
      </div>

      <section>
       <About/>
       <Interests/>
       
      </section>
    </main>
  );
}
