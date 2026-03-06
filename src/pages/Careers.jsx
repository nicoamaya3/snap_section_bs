import "../stylesheets/Careers.css"

import { Targets } from "../components/Targets"

export const Careers = () => {
    return (

        <>
      

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
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <img src="./happy.jpg" alt="" className="w-100 p-3 border border-white border border-5 rounded-5 " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center flex-column  m-5 gap-3 text-center">
                            <h1 className="fw-bold text-success">What you’ll get</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex">

                <Targets name="Whole-food recipes" descripcion="Each dish uses everyday, unprocessed ingredients." icon="./public/1.svg" />
                <Targets name="Minimum fuss" descripcion="All recipes are designed to make eating healthy quick and easy." icon="./2.svg" />
                <Targets name="Search in seconds" descripcion="Filter by name or ingredient and jump straight to the recipe you need." icon="./3.svg" />

            </div>

            <section className="container">
                <div className="row">
                    <div className="col-2 w-100">
                        <div className="d-flex">

                            <div className="w-50">
                                <div className=" d-flex flex-column gap-3 m-5">
                                    <h1 className="fw-bold text-success">Built for real life</h1>
                                    <p className="fs-5 w-75">Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat. Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
                                </div>

                            </div>

                            <div className="w-50 ">
                                <img src="./cocina.webp" alt="" className="w-100 p-3 border border-white border border-5 rounded-5" />
                            </div>


                        </div >

                    </div>
                </div>
            </section>


            <section className="container">
                <div className="row">
                    <div className="col">
                        <div className="w-100 d-flex ">
                            <div className="w-100 h-100 bg-info-subtle rounded-5 ">
                                <div className="p-5 m-5 text-center d-flex flex-column gap-3">
                                    <h1 className="fw-bold text-success">Ready to cook smarter?</h1>
                                    <p className="fs-5">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                                    <div>
                                        <button className="btn btn-success  p-2 fw-bold fs-5 rounded-4">Browse recipes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}
