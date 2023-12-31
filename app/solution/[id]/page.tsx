"use client";
import { problems } from "../../../data/Problems/index";
import { Problem } from "../../../data/types/problem";
import React, { useEffect,useState } from "react";
import '../../../styles/global.css';
import Solution from "../../../components/solution";


// getStaticProps => it fetch the data

function getStaticProps(id:string|undefined) {
  if(id!==undefined){
    const problem = problems[id];
    return problem
    
  }
}

const ProblemPage = () => {

  const [problem, setProblem] = useState<Problem | null>(null);
  const [proload,setproload]=useState<boolean>(true);

  useEffect(() => {
    const dynamicSegment = window.location.pathname.split("/").pop();
    const problemData = getStaticProps(dynamicSegment);
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
          !proload && <Solution problem={problem} />
        }
			  
      </>
	);
};

export default ProblemPage;


