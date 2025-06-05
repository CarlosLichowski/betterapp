import Graphs from '../Graph/Graphs'
import Table from '../Table/Table'
import './Home.css'
import Card from '../Cards/Card/Card'
import excersice from '../assets/excersice2.png'
import study from '../assets/study.png'
import clean from '../assets/clean.png'
import user from '../assets/user.png'

function Home(){
    return(
        <div className='homeContainer'>
            <div className='homeBoxes'>

            <Card CardImg={excersice} CardTitle={"Excersice"} CardDescription={"safasd"} />
            <Card CardImg={study} CardTitle={"Study"} CardDescription={"safasd"} />
            <Card CardImg={clean} CardTitle={"Clean"} CardDescription={"safasd"} />
            <Card CardImg={user} CardTitle={"User"} CardDescription={"safasd"} />
 
           
            
            </div>

            <Graphs/>

            <Table/>
        </div>
    )
}

export default Home