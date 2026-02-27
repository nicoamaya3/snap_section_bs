import "../stylesheets/Careers.css"
import { Header } from "../components/Header"

export const Careers = () => {
    return (

        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col ">
                        <div className="d-flex align-items-center flex-column  m-5 gap-3 text-center">
                            <h1 className="fw-bold text-success ">Healthy meals, zero fuss</h1>
                            <p className="w-75 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, repellendus, sint adipisci modi labore magni itaque deserunt.</p>
                            <button className="btn btn-success">Start exploring</button>
                            
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}
