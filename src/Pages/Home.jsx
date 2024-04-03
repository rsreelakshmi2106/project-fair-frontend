import React from 'react'
import { Link } from 'react-router-dom'
import Programmer from '../assets/Programmer.png'
import programmer2 from '../assets/programmer2.webp'
import programmer3 from '../assets/programmer3.png'
import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <div>
      <div className="row mx-auto">
        <div className="col-md-6 mx-auto mt-5">
          <h1 className='text-center mt-5'>Project Fair</h1>
          <p style={{ textAlign: 'justify' }} className='mx-4'>Project Management is the application of specific knowledge, skills, methodologies, and techniques aimed at achieving specific and measurable project goals, including, ultimately, successful project completion. It differs from general “management” because project management relates directly to the goals and time-bound objectives achieved within the scope of a project itself, on a limited timeline, rather than an ongoing one.</p>
          <div className='text-center '>
            <Link to={'/login'}>
              <button className='btn btn-dark mb-5 mt-2'>Get Started</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src={programmer2} width={'100%'} alt="" />
          {/* programmer illustration transparent image */}
        </div>
      </div>

      <div className="row mx-auto">
        <div className="col-12" style={{ height: '500px' }}>
          <h1 className='text-center m-5'>Explore Our Project</h1>
          <marquee width="100%" direction="left" height="450px">
            <div>
              <ProjectCard />
            </div>
          </marquee>
        </div>
      </div>

      <div className="row mx-5 mb-5">
        <h1 className='text-center my-5'>Our Services</h1>
        <div className="col-md-4">
          <div className="card shadow p-3" >
            <h3 className='text-center m-2'>Web Designing</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic reprehenderit numquam in quidem adipisci laboriosam, eveniet nisi repellendus a itaque eligendi distinctio magnam aliquid et non? Sequi voluptas assumenda perferendis?
            Architecto laboriosam, consectetur accusantium earum cum ipsam, tenetur alias recusandae quo enim doloremque, eveniet cupiditate culpa modi praesentium? Sed ratione eaque dolore quia deserunt reiciendis est omnis cum aliquam neque!</p>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card shadow p-3" >
            <h3 className='text-center my-2'>Single Page Application</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic reprehenderit numquam in quidem adipisci laboriosam, eveniet nisi repellendus a itaque eligendi distinctio magnam aliquid et non? Sequi voluptas assumenda perferendis?
            Architecto laboriosam, consectetur accusantium earum cum ipsam, tenetur alias recusandae quo enim doloremque, eveniet cupiditate culpa modi praesentium? Sed ratione eaque dolore quia deserunt reiciendis est omnis cum aliquam neque!</p>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card shadow p-3">
            <h3 className='text-center m-2'>Backend Services</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic reprehenderit numquam in quidem adipisci laboriosam, eveniet nisi repellendus a itaque eligendi distinctio magnam aliquid et non? Sequi voluptas assumenda perferendis?
            Architecto laboriosam, consectetur accusantium earum cum ipsam, tenetur alias recusandae quo enim doloremque, eveniet cupiditate culpa modi praesentium? Sed ratione eaque dolore quia deserunt reiciendis est omnis cum aliquam neque!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home