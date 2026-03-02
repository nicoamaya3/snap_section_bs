

export const Targets = ({name , descripcion, icon}) => {
  return (
    <>
    
    <div className="container">
        <div className="row">
            <div className="col ">
                <div className=" m-5 ">
                    <img src={icon} alt="" />
                    <h2 className="fw-bold fs-3 text">{name}</h2>
                    <p className= "fs-5 text" >{descripcion}</p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    </>
  )
}
