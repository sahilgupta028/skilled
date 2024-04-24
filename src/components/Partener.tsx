import React from 'react';
import partener from '../data/parteners.json';
import Image from 'next/image';


// Define the partner data as a JSON array of objects
const partnersData = partener.parteners;

const Partners: React.FC = () => {
  return (
    <div className="py-8">

      <div className='bg-blue-100  p-4 text-center text-blue-500 font-bold rounded-lg m-2'>
        <h2 className="bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold font-sans hover:font-extrabold ">Our Partners</h2>
      </div>
      

      <div className=" top-0 left-0 w-full flex gap-5 justify-center items-center">
        {partnersData.map((partner, index) => (

          <div key={index} className="bg-white rounded-2xl px-1  min-h-14 shadow-md  animate-partner-card object-cover">
            <Image
            src={partner.image}
            alt={partner.name}
            width={100}
            height={80}
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
