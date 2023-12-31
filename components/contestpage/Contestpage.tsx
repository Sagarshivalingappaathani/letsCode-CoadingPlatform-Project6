import React,{useState} from 'react';
import Split from 'react-split';
import '../../styles/global.css';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import ProblemGround from './CodeboxContest/Playground';
import { Problem } from '../../data/types/problem'; 

type Props = {
  problem: Problem ; 
  
};

const Contest = (props: Props) => {

  const [time,settime]=useState<number>(0);
  const [timeover,settimeover]=useState<boolean>(false);

  return (
    <>
      <main className="w-full ">
          <Split className='split' minSize={0}>
            <ProblemDescription problem={props.problem} time={time} settime={settime} timeover={timeover} settimeover={settimeover}/>
            <ProblemGround problem={props.problem} time={time} settime={settime} timeover={timeover} settimeover={settimeover}/>
          </Split>
      </main>
    </>
  );
};

export default Contest;



