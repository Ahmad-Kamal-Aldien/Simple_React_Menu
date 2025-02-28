import { Button } from "react-bootstrap"
const Category=({getAllCat,getSpecificCategory})=>{

    const getSelected=(newVal)=>{



        getSpecificCategory(newVal)
    }
    return(
        <>
           <div className="d-flex justify-content-center mt-3 gap-3 mb-3">
        {
            getAllCat.map( (i)=>{
           
                return (
                   
                    <Button value={i} onClick={(e)=>getSelected(e.target.value)} variant="outline-warning" key={Math.random()}> {i}</Button>
                )
              })
        }
        </div>
      
       

        </>
    )
}

export default Category