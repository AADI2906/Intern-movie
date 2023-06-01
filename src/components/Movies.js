import React ,{useRef, useState , useEffect}from 'react'
import { Moviedata } from './Data'
import axios from 'axios';
export const Movies = () => {
    
    let movie = Moviedata; // this is for hardcore data....
    const ref = useRef(null);
    const refClose = useRef(null);
    const [currMovie, setcurrMovie] = useState({name:"" , genre:""});
    
    const [Movie, setMovie] = useState([]); // This is for Api calling for data

    const getData = async () => {
      const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
      setMovie(data);
      
      };

      useEffect(() => {
      getData();
    }, []);
       
    // checking whether Movies array is updated or not 
    console.log(Movie);

    

    const handleClick=(obj)=>{
      setcurrMovie({
        name:obj.show.name , genre:obj.show.genres[0]
      })
      ref.current.click();
    }
    


   return (
    <div className='container my-2'>
{/* Modal code start */}
<button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{visibility:"hidden"}}>
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndexndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Book ticket</h1>
        <button ref={refClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h4>Movie : {currMovie.name}</h4>
        <div>Genre: {currMovie.genre}</div>
      </div>
      <form>
  <div class="mb-3 container">
    <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 container">
    <label for="exampleInputPassword1" class="form-label">Phone number</label>
    <input type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
</form>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={()=>refClose.current.click()}>Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* Modal code ending */}

    <h2>Available Movies</h2>
    
    <div style={{width:"100%"}}>
    {
        Movie.map((obj)=>(
          
        <div style={{height:"135px",backgroundColor:"pink", width:"300px"}}>
                <div class="card-body my-5">
                <div className='col-lg-3' style={{paddingLeft:"10px"}}>
                <h5 class="card-title">{obj.show.name}</h5>
                <h6 class="card-text">{obj.show.genres[0]}</h6>
                <a href="#" class="btn btn-primary" onClick={()=>handleClick(obj)}>Book</a>
                </div>
            </div>
                </div>
        ))
    }
   
   
    </div>

    
        
    </div>
  )
}
