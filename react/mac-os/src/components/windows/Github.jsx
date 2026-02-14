import React from 'react'
import githubData from "../../assets/github.json";
import MacWindow from './MacWindow'
import "./github.scss";

const GitCard = ({data={id:1,image:"",tittle:"",description:"",tags:[],repoLink:"",demoLink:""}}) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag'>{tag}</p> )
            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
        </div>
    </div>
}

const Github = () => {
  return (
    <MacWindow>
        <div className="cards">
            {githubData.map(project => {
                return <GitCard data={project}/>
            })}
        </div>
    </MacWindow>
  )
}

export default Github
