//import React, { useEffect } from 'react'
import axios from "axios";
import { connect } from "react-redux";
import { FaArrowAltCircleDown } from "react-icons/fa";

import { useEffect, useState } from "react";
import EventList from "../components/EventList";
import EventListItem from "../components/EventListItem";
import EmptyEventListItem from "../components/EmptyEventListItem";
import TodayEventBox from "../components/TodayEventBox";
import RecentChangesCard from "../components/RecentChangesCard";
import EventModal from "../components/EventModal";
import EventAccesstypeModal from "../components/EventAccesstypeModal";
import { useSelector, useDispatch } from "react-redux";
import {
  setTodaysEventModalOpen,
  setTodaysEvent,
} from "../redux/todaysEventModal/todaysEvent-actions";
import TodaysEventModal from "../components/TodaysEventModal";

import {
  setModalClose,
  setModalOpen,
} from "../redux/eventModal/eventModal-action";
import ReservationsTab from "../components/ReservationsTab";
import ErrorBoundary from "../components/ErrorBoundary";
import { motion } from "framer-motion";

function AdminHome() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [event, setEvent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [eventToday, setEventToday] = useState();
  const [ourModal, setOurModal] = useState();
  const [publicEvents, setPublicEvents] = useState();
  const [companyEvents, setCompanyEvents] = useState();
  const [changes, setChanges] = useState();
  const [hasChanges, setHasChanged] = useState(false);

  const modalState = useSelector((state) => state.showModal.visibility);

  const [filtered, setFiltered] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setOurModal(modalState);

    const prom = new Promise((resolve, reject) => {
      axios.get("http://localhost:3002/recentChanges").then((response) => {
        setChanges(response.data);
      });
      axios.get("http://localhost:3002/currentEvents").then((response) => {
        console.log(typeof response.data);
        const obj = response.data;
        const arr = [];

        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const date = new Date();

        let day = date.getDate();
        let year = date.getFullYear();
        let monthIndex = date.getMonth();
        const month = months[monthIndex];
        console.log(day + " " + month + " " + year);
        const today = {
          month: month,
          day: day,
          year: year,
        };
        obj.forEach((e) => {
          // console.log(e.date)
          const eventdate = e.date.split(" ");
          const eventday = eventdate[1].replace(",", "");

          const eventDate = {
            month: eventdate[0],
            day: eventday,
            year: parseInt(eventdate[2]),
          };

          if (
            eventDate.year == today.year &&
            eventDate.month == today.month &&
            eventDate.day == today.day
          ) {
            console.log(e);
            const obj = {
              act: e.act,
              date: e.date,
              time: e.time,
              access: e.access,
              id: e.id,
            };
            console.log("todaysEvent");
            console.log(obj);
            setEventToday(obj);
            console.log(eventToday);
          }
        });
        setUpcomingEvents(obj);
        console.log(upcomingEvents);
        setEvent(upcomingEvents[0]);
        dispatch(setTodaysEvent(eventToday));
        resolve();
      });
    });

    prom
      .then(() => {
        console.log(eventToday);
        console.log("\n\n\n\n");
        console.log(upcomingEvents);
        console.log(eventToday);
        dispatch(setTodaysEvent(eventToday));
      })
      .then(() => {
        dispatch(setTodaysEventModalOpen(true));
        setIsLoading(false);
      });
  }, []);
  //place modalState back independencies

  //console.log(todaysEvent)

  const handleChange = (e) => {
    if (e.target.value == null || e.target.value == "") {
      const fil = upcomingEvents;
      setFiltered(upcomingEvents);
    }

    const fil = [];

    const prom = new Promise((resolve, reject) => {
      setFiltered([]);
      upcomingEvents.map((ev) => {
        ev.props.event.act.includes(e.target.value);
        //console.log('hello')
        const eve = ev.props.event.act;
        //console.log(eve)
        if (eve.includes(e.target.value)) {
          fil.push(ev);
        }
      });
      resolve(fil);
    });

    prom
      .then(() => {
        setFiltered(fil);
        console.log("filtered should be");
        console.log(filtered);
      })
      .catch(console.log("filter not working"));
    console.log(e.target.value);
  };

  const [modalClose, setModalClose] = useState(false);
  console.log("recent changes");
  console.log(changes);

  function handleClose() {
    console.log("FROM DMIN SETTING MODAL CLOSE");
    console.log(modalClose);
    setModalClose(true);
  }

  /******************************* */
  console.log("++++++++++++++++++++++++++++++++++++++++");
  console.log(eventToday);
  function generateNumber() {
    let diff = 360 - 0;
    let rand = Math.random() * 100;
    console.log(rand);
    return Math.floor(rand * diff);
  }
  generateNumber();

  /****
   *     <div class="flex">
       
       <motion.svg  initial={{ scale: 0 }}
          animate={{ rotate:10, scale: 1 }}
          transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay:2,
          duration:5
          }}><FaArrowAltCircleDown/></motion.svg>
          
       </div>
       
        
        <motion.h2 animate={{x:value+ "px" }}>Super Cool</motion.h2>
            <input  type="range" min="-100" max="100" value={value} onChange={e => setValue(e.target.value)}/>

            <motion.h1 
                animate={{ y: [200, 10, 200], opacity: 1, scale: 1 }}
                transition={{
                    duration: 3,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                Animation made easy with Framer Motion
            </motion.h1>
   */

  const [value, setValue] = useState();
  console.log(upcomingEvents);
  if (!isLoading) {
    return (
      <div class='max-w-1/2'>
        <div class='grid grid-cols-3 justify-between gap-x-10 gap-y-5'>
          {upcomingEvents.map((m) => (
            <motion.div
              class='seat'
              initial={{ scale: 0 }}
              animate={{ rotate: generateNumber(), scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                duration: 5,
              }}
            >
              <h3>{m.id}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
}
/*
 <EventModal />
        <EventAccesstypeModal />
        <div class='mt-20 block mb-5'>
          <div class='flex  p-5 gap-y-4 '>
            <div class='flex-1/3  ml-5 p-5 object-contain  rounded-md '>
              {eventToday != null ? (
                <TodayEventBox event={eventToday} />
              ) : (
                <h1>No Event Today</h1>
              )}
            </div>
            <div class='flex-1/3  object-contain  rounded-md '>
              <ErrorBoundary>
                <ReservationsTab />
              </ErrorBoundary>
            </div>
            
          </div>
          <div className='flex lg:max-w-sm  md:max-w-sm sm:max-w-sm h-1/2 bg-green-300 p-20'>
            
              <div class=' bg-gray-200 md:max-w-sm lg:max-w-sm m-5 p-5 pr-0 rounded-md '>
                <h2 class='m-2 text-xl bold'>Upcoming Events</h2>
                <EventList listType={"current"}  />
              </div>
              <div class=' bg-gray-300 m-5 p-5 pr-0 rounded-md '>
                <h2 class='m-2 text-xl bold'>Public Events</h2>
                <EventList listType={"public"} />
              </div>
              <div class=' bg-gray-400 m-5 p-5 pr-0 rounded-md '>
                <h2 class='m-2 text-xl bold'>Company Events</h2>
                <EventList listType={"company"} />
              </div>
              <div class='object-contain bg-gray-400 m-5 p-5 pr-0 rounded-md '>
                <h2 class='m-2 text-xl bold'>Private Events</h2>
                <EventList listType={"private"} />
              </div>
            
           
          </div>
          <div class='block  h-300 gap-y-4 justify-end'>
          <div class='rounded-md bg-yellow-400 m-10 p-5'>
                <p class='text-3xl'>Recent Changes</p>
            <div class='  
            max-h-screen overflow-y-auto 
            flex-col justify-center items-center  p-10'>
                  {changes.map((m) => {
                    return (
                      <div class='block first-letter m-2 p-3 bg-gray-200 shadow-md'>
                        <p key={m.id} class='text-md pb-3'>
                          {m.message}
                          <p class='text-center'>
                            <span class='text-emphasis'>Changed On:</span>{" "}
                            {m.time} | {m.day}
                          </p>
                        </p>
                      </div>
                    );
                  })}
                  
                </div>
                </div>
                <div class="block h-400 bg-green-300 p-10 mb-10">
                    <div class="flex gap-x-3">
                      <div>
                        <ReservationsTab/>
                      </div>
                      <div >
                      <ReservationsTab/>
                      </div>
                    </div>
                </div>
            </div>
        </div>


*/
/*
<div class='rounded-md bg-yellow-400 m-5 p-5'>
                <p class='text-3xl'>Recent Changes</p>
<div class=' max-h-screen overflow-y-auto flex-col justify-center items-center  p-10'>
                  {changes.map((m) => {
                    return (
                      <div class='block first-letter m-2 p-3 bg-gray-200 shadow-md'>
                        <p key={m.id} class='text-md pb-3'>
                          {m.message}
                          <p class='text-center'>
                            <span class='text-emphasis'>Changed On:</span>{" "}
                            {m.time} | {m.day}
                          </p>
                        </p>
                      </div>
                    );
                  })}
                </div>
                </div>


*/

const mapStateToProps = (state, props) => {
  const reload = state.reloadPage.reload;
  console.log("vis: " + reload);
  return {
    reload: reload,
  };
};

export default connect(mapStateToProps)(AdminHome);
