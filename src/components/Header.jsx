import { useState,useEffect } from 'react'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick =() =>{
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
    
  },[darkMode]);
    return (
      <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1040px] md:mb-[500px]  xl:mb-[480px] 2xl:mb-[200px]" >
        <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
        <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">Total Followers: 23,004</p>
        <hr className="bg-black mb-[16px]"/>
        <div className="flex justify-between">
          <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
          <label htmlFor="darkmode" className="bg-Toggle w-12 h-6 cursor-pointer rounded-full p-[3px] relative overflow-hidden">
            <input onClick={handleClick} className="peer sr-only" type="checkbox" id="darkmode"  />
            <div className="peer-checked:bg-Toggle-gradient absolute top-0 left-0 w-full h-full"></div>
            <div className="w-[18px] bg-Light-Grayish-Blue h-[18px] rounded-full peer-checked:translate-x-[24px] transition-all"></div>
            
          </label>
        </div>
      </header>

    )
  }
  