import { Button } from "react-bootstrap"
const Category=({})=>{

    return(
        <>
      
        <div className="d-flex justify-content-center mt-3 gap-3">
        <Button variant="outline-warning">فطار</Button>
        <Button variant="outline-warning">عذاء</Button>
        <Button variant="outline-warning">عشاء</Button>
        </div>

        </>
    )
}

export default Category