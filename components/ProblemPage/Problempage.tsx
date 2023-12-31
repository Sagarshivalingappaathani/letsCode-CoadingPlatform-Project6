import React from 'react';
import Split from 'react-split';
import '../../styles/global.css';
import ProblemDescription from './ProblemDescription/Problemdescription';
import ProblemGround from './Codebox/Playground';
import { Problem } from '../../data/types/problem'; 

type Props = {
  problem: Problem ; 
};

const workSpace = (props: Props) => {
  return (
    <>
      <main className="w-full ">
        <Split className="split" minSize={0}>
            <ProblemDescription problem={props.problem} />
            <ProblemGround problem={props.problem} />
        </Split>
      </main>
    </>
  );
  
};

export default workSpace;
