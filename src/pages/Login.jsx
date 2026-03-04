import { Header } from "../components/Header"

export const Login = () => {
    return (
        <>
            <Header />

            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col ">
                        <div className="d-flex justify-content-center p-5" >
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div className="w-25 ">
                                <form className="d-flex flex-column">
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
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Recuerdamé</label>
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
