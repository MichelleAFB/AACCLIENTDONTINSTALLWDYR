import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import { Chart as ChartJS,BarElement,CategoryScale,LinearScale,Title,Tooltip,Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { createRoot } from 'react-dom/client';

import { faker } from '@faker-js/faker';
function VotesGraph() {

  const [votes,setVotes]=useState()
  const [starters,setStarters]=useState()
  const[sandwhiches,setSandwhiches]=useState()
  const[sweets,setSweets]=useState()
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {

    const values=[]
    const prom=new Promise((resolve,reject) => {
      axios.get("http://localhost:3002/company/getVotes").then((response) =>{
        console.log("(((((((((((((((((((((((((((((((((())))))))))))))))))))))")
      console.log(response.data)
      
      //
      const resStarters=response.data.starters
      
      resStarters.map((r)=> {
       values.push(r)
      })
      const resSandwhiches=response.data.sandwhiches
      //
      resSandwhiches.map((r)=> {
      
          values.push(r)
        
      })

      const resSweets=response.data.sweets
      //
      resSweets.map((r)=> {
      
          values.push(r)
        
      })


      const data=response.data.starters
      const sw=response.data.sweets
      const sand=response.data.sandwhiches
      setSweets(sw)
      setSandwhiches(sand)
      setStarters(data)
      
      setTimeout(()=> {
        resolve()
      },500)
     
      })
    })

    prom.then(() => {
      console.log(values)
      setVotes(values)
      setIsLoading(false)
    }).catch(()=>{
      console.log("DIDNT WORK")
    })
     
    

  },[])


  
  
 // console.log(votes.starters)
  if(!isLoading){
   
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
    
   const sweetsOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    
    const sweetsLabels = "sweets";
   
     const sweetsData = {
      sweets,
      datasets:
         [{
          label: 'Sweets',
          data:  votes.map((s)=> s.votes),
          backgroundColor: 'rgba(53, 100, 35, 0.5)',
        }  ]
    };
/***************************************** */

 
   const startersOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    
    const startersLabels = [starters[0].name,starters[1].name,starters[2].name,starters[3].name];
   console.log(startersLabels)
     const startersData = {
      sweets,
      datasets:
         [{
          label: startersLabels[0],
          data:  sandwhiches.map((s)=> s.votes),
          backgroundColor: 'rgba(53, 100, 35, 0.5)',
        } , ]
    };
 
/***************************************** */
   const labels=["starters","sandwhiches","sweets"]
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    const data = {
      labels,
      datasets:[
         {
          label: 'Sweets',
          data:  sweets.map((s)=> s.votes),
          backgroundColor: 'rgba(53, 100, 35, 0.5)',
        },
        {
          label: 'Sandwhiches',
          data:  sandwhiches.map((s) =>s.votes ),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Starters',
          data:  starters.map((s) =>s.votes ),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
      ]
    };

    /*   const sweetsOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    
    const sweetsLabels = sweets;
   // console.log(sweets[0].votes)
     const sweetsData = {
      sweetsLabels,
      datasets:[
         {
          label: 'Sweets',
          data:  sweets.map((s)=> s.votes),
          backgroundColor: 'rgba(53, 100, 35, 0.5)',
        }/*,
        {
          label: 'Sandwhiches',
          data:  sandwhiches.map((s) =>s.votes ),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Starters',
          data:  starters.map((s) =>s.votes ),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
      ]
    };

    */
console.log(votes)
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}}

export default VotesGraph