import React from 'react';
import * as motion from "motion/react-client"
import { easeInOut, easeOut } from 'motion';
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{y:[0,50,0]}}
                        transition={{duration:10, repeat:Infinity}}
                        className="max-w-sm w-56 rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-600 shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{x:[100,150,100]}}
                        transition={{duration:10,delay:5, repeat:Infinity}}
                        className="max-w-sm w-56 rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-600 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    
                    <motion.h1
                    animate={{x:[0,40,0],color:'green'}}
                    transition={{duration:10, delay:1,repeat:Infinity, ease:easeOut}}
                    className="text-5xl font-bold">Latest <motion.span 
                    animate={{color:['#ff5733','#2a409d','#900992']}}
                    transition={{repeat:Infinity}}
                    >Job</motion.span> for you</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;