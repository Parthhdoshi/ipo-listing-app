import React from 'react';

export default function Stepper ({currentStep, numberOfSteps}:any) {
  const activeColor = (index:any) => currentStep >= index ? 'bg-green-500 border-green-500 text-white' : "bg-gray-200 border-gray-300"
  const isFinalStep = (index:any) => index === numberOfSteps - 1

  return (
    <div className="flex items-center">
      {Array.from({length: numberOfSteps}).map((_, index) => (
        <>
        <React.Fragment key={index} >           
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${activeColor(index)}`}> 
          {currentStep >= index ? "✓" : ""}
           </div>
           
          {isFinalStep(index) ? null : <div className={`w-12 h-1 ${activeColor(index)}`}></div>}
        </React.Fragment>
        
        </>
      ))}
    </div>
  )
}
