import { useParams } from "react-router-dom"

const ResultPage = () => {
  let { ansCount } = useParams();

  ansCount = ansCount?.slice(1);
  
  return (
    <div className="flex items-center justify-center mt-[40vh] ">
        <main className=" text-4xl font-mono">
            <h1>
                Quiz Score : {ansCount}
            </h1>
        </main>
    </div>
  )
}

export default ResultPage