import "../stylesheets/Home.css"

export const Home = () => {



    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-6wd">
                        <div className="d-flex flex-column justify-content-center h-100 gap-5 ">

                            <div>
                                <h1>Make <br /> remote work</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, reprehenderit ratione culpa numquam rem, expedita alias, dolorum suscipit repudiandae dignissimos error voluptatibus. Explicabo pariatur sunt ipsam. Culpa rem officiis omnis.</p>
                                <a href="http://www.jango.com" className="btn btn-dark" >Learn more</a>
                            </div>

                            <div className="d-flex align-items-center gap-5 ">
                                <img src="./linear.svg" alt="" height="25" />
                                <img src="./shopify.svg" alt="" height="25" />
                                <img src="./stripe.svg" alt="" height="25" />
                                <img src="./wiz.svg" alt="" height="25" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <div className=""></div>
                            <img className="img-fluid" src="./o.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
