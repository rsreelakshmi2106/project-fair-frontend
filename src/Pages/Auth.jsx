import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
      <div className="row mx-auto">
        <div className="col-lg-6">
          <img src="https://cdn.dribbble.com/users/2131993/screenshots/4948736/thoughtworks-gif_dribbble.gif" className='p-4' width={'100%'} alt="" />
        </div>
        <div className="col-lg-6">
          <form className='shadow bg-black'>
            <h2 className='text-center m-5'>Project Fair</h2>
            <h4 className='text-center'>
            {
              register? 'Register Here...':'Login Here...'
            }
            </h4>
            <div className='mx-5 px-5 mt-3'>
              {
                register &&
                <input className='form-control mb-2' type="text" placeholder='Username' />
              }
              <input className='form-control mb-2' type="email" placeholder='email' />
              <input className='form-control mb-2' type="password" placeholder='password' />
            </div>

            <div className='text-center'>
              {
                register? 
                  <div className='text-center m-4'>
                    <button className='btn btn-dark m-4'>Register</button>
                    <p>Already registere? <Link to={'/login'}>Login Here</Link></p>
                  </div>
                  :
                  <div className='text-center m-4'>
                    <button className='btn btn-dark m-4'>Login</button>
                    <p>New to Here? <Link to={'/register'}>Register Here</Link></p>
                  </div>
              }
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth