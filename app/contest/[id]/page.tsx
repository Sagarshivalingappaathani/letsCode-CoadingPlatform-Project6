"use client";

import Contest from "../../../components/contestpage/Contestpage";
import { problems } from "../../../data/Problems/index";
import { Problem } from "../../../data/types/problem";
import React, { useEffect,useState } from "react";
import '../../../styles/global.css';

type ProblemPageProps = {
	problem: Problem|null;
};

// getStaticProps => it fetch the data

function useGetstaticprops(id:string|undefined) {
  if(id!==undefined){
    const problem = problems[id];
    return problem
    
  }
}

const ProblemPage: React.FC<ProblemPageProps> = () => {

  const [problem, setProblem] = useState<Problem | null>(null);
  const [proload,setproload]=useState<boolean>(true);

  useEffect(() => {
    const dynamicSegment = window.location.pathname.split("/").pop();
    const problemData = useGetstaticprops(dynamicSegment);
    if (problemData) {
      setProblem(problemData);
      setproload(false);
    }
  }, []);

  if (!problem) {
    return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="mt-60">
            <span className="flex justify-center items-center loader"></span>
          </div>
        )
	  }
  

	return (
      <>
        {proload && 
           (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="mt-60">
              <span className="flex justify-center items-center loader"></span>
            </div>
          )
        }
        {
          !proload && <Contest problem={problem} />
        }
			  
      </>
	);
};

export default ProblemPage;


