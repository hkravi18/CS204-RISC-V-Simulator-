import { useState } from 'react';

import Input from './Components/Input';
import Loading from './Components/Loading';
import Output from './Components/Output';



function App() {
  const [data, setData] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reqSent, setReqSent] = useState(false);
  const [outputData, setOutputData] = useState([]);
  const [fullData, setFullData] = useState("");


  const [btb, setbtb] = useState(false);
  const [df, setDf] = useState(false);

  const handlebtb = () => setbtb(!btb);
  const handledf = () => setDf(!df);
 


  const handleSubmit = async(name) => {
      setIsLoading(true);
      setReqSent(true);
      let response, responseData;

      const fetchURL = async(dataURL, newText) => {
        const res = await fetch(dataURL, {
          method: "POST",
          headers: {
          'Content-type': 'application/json'
          },
          body: JSON.stringify(newText)
        });

        return res;
      }


      try {
          const newText = { data }; 
          if (name == "pipeline") {
            if (!btb && !df) response = await fetchURL("http://localhost:8000/pipeline/0/0", newText); 
            else if (btb && !df) response = await fetchURL("http://localhost:8000/pipeline/1/0", newText);
            else if (!btb && df) response = await fetchURL("http://localhost:8000/pipeline/0/1", newText);
            else if (btb && df) response = await fetchURL("http://localhost:8000/pipeline/1/1", newText);
          } else if (name == "singleCycle") {
            response = await fetchURL("http://localhost:8000/singleCycle", newText); 
          }
          responseData = await response.json();
          setFullData(responseData.shift());
          if (!response.ok) {
            throw Error('Did not receive expected data')
          }  
          // console.log("response-data ",responseData);
          responseData.pop();
          setFetchError(null);
          setOutputData(responseData);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
  };

  return (
    <>
      <h1 className="text-white">RISC-V SIMULATOR</h1>
      {!fetchError && !isLoading && !reqSent && <Input 
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
        handlebtb={handlebtb}
        handledf={handledf}
      />}
      {!fetchError && isLoading && <Loading />}
      {!fetchError && reqSent && !isLoading && <Output 
        outputData={outputData}
        fullData={fullData}
      />}
      {fetchError && <p style={{color: "red"}}>
          {`Error : ${fetchError}`}
      </p>}
    </>
  );
}

export default App;
