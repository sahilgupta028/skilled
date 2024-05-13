import React from 'react'

function page() {
  return (
    <div>
        <div  className="flex justify-center items-center h-60">
      <img src="certificate_banner.jpg" className="h-64 w-auto mt-10"/>
        </div>
      <div>
        <div className=" border-gray-500 p-16 shadow-2xl">
        <form className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-900 rounded-lg shadow-xl px-60 mx-72 py-10 mb-1">
          <div className="text-2xl font-bold text-center mt-14 mb-5" >
            <label htmlFor="Program Name">Program Name</label>
          </div>
          <div>
            <select className="w-full h-12 border-4 rounded">
              <option value="Select Program"> Select Program</option>
              <option value="Data Science Pro">Data Science Pro</option>
              <option value="MySQL Quiz Competition">MySQL Quiz Competition</option>
              <option value="Power BI Workshop">Power BI Workshop</option>
              <option value="Full Stack Data Science">Full Stack Data Science</option>
              <option value="Python MasterClass">Python MasterClass</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Business Analytics">Business Analytics</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="MySQL Expert">MySQL Expert</option>
              <option value="Full Stack Business Analytics">Full Stack Business Analytics</option>
              <option value="Data Science MasterClass">Data Science MasterClass</option>
            </select>
          </div>
          <div className="text-2xl font-bold text-center mt-14 mb-5">
            <label htmlFor="Email">E-mail Address</label>
          </div>
          <div className="Email input">
            <input className="w-full h-12 border-4 rounded" type="Email" id="Email" placeholder="example@gmail.com" />
          </div>
          <div className="button mt-14 text-center">
            <button className="bg-blue-900 text-white py-2 px-6 font-semibold rounded">Show Certificate</button>
          </div>
          <div className="button mt-6 text-center">
            <button className="bg-blue-900 text-white py-2 px-16 font-semibold rounded">Share</button>
          </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default page