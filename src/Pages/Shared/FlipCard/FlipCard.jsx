
import { useEffect, useState } from 'react';
import './FlipCard.css';

const FlipCard = () => {
  const [mentorsData, setMentorsData] = useState([])

  useEffect(() => {
    fetch('ourMentors.json')
      .then(response => response.json())
      .then(data => setMentorsData(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);
  return (
    <>
      {mentorsData?.map(data => <div className="card-container col-span-1" key={data?.id}>
        <div className="card w-full h-full relative duration-300  rounded-3xl">
        <div className="front rounded-3xl ">
            <div className=' h-full w-1/2 justify-center items-center flex p-2'>

              <div className='  h-[100px] w-[100px] rounded-full   '>
                
                  <img className='h-full  p-2 shadow-rose-950 shadow-inner' src={data?.profileImage} alt="img" />
                
              </div>
            </div>
            <div className='flex flex-col h-full w-1/2 text-center p-2 items-center justify-center '>
              <h1 className='text-bold text-lg text-[#000324]'>{data?.name}</h1>
              <p className='text-xs'>Student Of DIU <br /> Batch: E-85 <br /> Roll No: {data?.roll}</p>
            </div>

          </div>
          <div className="back flex-col p-4 rounded-3xl">
            <h1 className='text-[#000324] text-lg'>{data?.role}</h1>
            <p className='text-xs'>{data?.details}</p>

          </div>
         
        </div>
      </div>


      )

      }
    </>
  );
};

export default FlipCard;
