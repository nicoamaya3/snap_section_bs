


export const Register = () => {
    return (
        <>

       

            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col">
                        <div className="d-flex flex-column align-items-center gap-3 p-5" >
                            <h4 className="fw-bold">Crea tu cuenta</h4>
                            <div className="d-flex justify-content-center ">
                                <img src="./public/user.png" alt="" className="w-25 " />
                            </div>
                            <div className="w-25 bg-info-subtle rounded p-5">
                                <form className="d-flex flex-column">
                                    <div className="mb-3">
                                        <label for="exampleInputName" className="form-label">Nombre</label>
                                        <input type="name" className="form-control" id="exampleInputName" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">
                                            Nunca compartiremos su correo electrónico con nadie más..</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Iniciar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
