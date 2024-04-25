import { Spacer } from '@nextui-org/spacer';
import React from 'react';

function Scroll() {
  return (
    <div className="flex relative overflow-scroll max-h-[800px]">

        <Spacer y={96} />
      <div className="sticky top-0 h-screen overflow-auto">
        {/* Sidebar content */}
        <div className="p-4">
          <h2 className="font-bold text-xl mb-4">Sidebar</h2>
          {/* Add your sidebar content here */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {/* Grid of cards */}
        {Array(20).fill(null).map((_, index) => (
          <div key={index} className="m-4 w-64">
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-bold text-lg mb-4">Card {index + 1}</h3>
                {/* Add your card content here */}
                <p>Test Courses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scroll;