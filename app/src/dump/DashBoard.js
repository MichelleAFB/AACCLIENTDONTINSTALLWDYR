import React from 'react'
import EventList from '../components/EventList'
import {useEffect,useState} from 'react'
import axios from 'axios'
import EventListFull from '../components/EventListFull'
import ReservationsTab from '../components/ReservationsTab'
import EventModal from '../components/EventModal'
import TodayEventBox from '../components/TodayEventBox'
import ErrorBoundary from '../components/ErrorBoundary'
import RecentChangesCard from '../components/RecentChangesCard'
function DashBoard() {

  const [events,setEvents]=useState()
  const [isLoading,setIsLoading] =useState(true)

 
  useEffect(() => {

    const eve=[]
    const prom = new Promise((resolve,reject) => {
      axios.get("https://accserverheroku.herokuapp.com/currentEvents").then((response) => {
          const data =response.data
          data.map((e) => {
            eve.push(e)
          })
          resolve()
      })
    })

    prom.then(() => {
      setEvents(eve)
      setIsLoading(false)
    })

  },[])

  if(!isLoading){
  return (
    <body className="body">
       <EventModal/>
     
     
        <div className="component_list_small_content items-center justify-between overflow-y-scroll w-full" >
          <div class="grid grid-cols-2 gap-x-4 p-5">
          <ReservationsTab/>
        <ErrorBoundary>
          <TodayEventBox/>
        </ErrorBoundary>
          </div>
          </div>
    

      <div class="p-5 grid grid-cols-1 bg-orange-300 rounded-md mb-3">
        <EventListFull listType={"current"}/>
      </div>
     
      <div class="grid grid-cols-3 p-5 rounded-md bg-red-300">
      
      <EventList listType={"public"}/>
      <EventList listType={"private"}/>
      <EventList listType={"company"}/>

      </div>
      
      <div class="grid ">
      <RecentChangesCard title={"Event Access Change"} changeType={"access-change"}/>
     
      </div>
      
    
      
      
      
     <h2>component list grid</h2> 
     
      

      <div class=" bg-gray-200 p-5 rounded-md">
      <h2>component list </h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="component_list items-center justify-between overflow-y-scroll w-full md:m-3 lg:m-1" >
        <div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          </div>
      </div>
      <div className="component_list items-center justify-between overflow-y-scroll w-full  md:m-3 lg:m-1" >
        <div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          </div>
      </div>
      <div className="component_list items-center justify-between overflow-y-scroll w-full" >
        <div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          </div>
      </div>
     
      <div className="component_list items-center justify-between overflow-y-scroll w-full" >
        <div class="">
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class=" bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4">
            <EventList/>
          </div>
          </div>
      </div>
      </div>
      </div>




     <h1>new list</h1> 
    <div class="grid grid-cols-2">
      <div className="component_list items-center justify-between overflow-y-scroll w-full" >
        <div>
          <div class="max-h-dm bg-blue-400 rounded-md m-4 w-1/2 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-dm bg-blue-400 rounded-md m-4 w-1/2 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4 text-center">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
          <div class="max-h-sm bg-blue-400 rounded-md m-4">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hoo</li>
            </ul>
          </div>
        </div>
        
          
      </div>
      
      </div>
    </body>
    )
  }
}




/*  <div>
              <h2 class="text-2xl font-bold mb-4">Stats</h2>

              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <div class="p-4 bg-green-100 rounded-xl">
                    <div class="font-bold text-xl text-gray-800 leading-none">Good day, Kristin</div>
                    <div class="mt-5">
                      <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                        Start tracking
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div class="font-bold text-2xl leading-none">20</div>
                  <div class="mt-2">Tasks finished</div>
                </div>
                <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div class="font-bold text-2xl leading-none">5,5</div>
                  <div class="mt-2">Tracked hours</div>
                </div>
                <div class="col-span-2">
                  <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div class="font-bold text-xl leading-none">Your daily plan</div>
                    <div class="mt-2">5 of 8 completed</div>
                  </div>
                </div>
              </div>
            </div>




*/
export default DashBoard