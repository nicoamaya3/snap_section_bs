import { Header } from "../components/Header"
import "../stylesheets/About.css"

export const About = () => {
  return (

    <>

      <Header />

      <div className="container m-5">
        <div className="row p-5 fine ">
          <div className="col-12 bg-white">
            <div className="d-flex flex-column ">
              <div className=" d-flex flex-column gap-3 p-5 ">
                <h5>Join our community</h5>
                <h4>30-day, hassle-free money back guarantee</h4>
                <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
              </div>

            </div>
          </div>
          <div className="col-6 text-light back">

            <div className="p-5 d-flex flex-column gap-2">
              <h5>Monthly Subscription</h5>
              <div className="d-flex align-items-end gap-2">
                <h2>$29</h2>
                <h5>per month</h5>
              </div>
              <p>Full access for less than $1 a day</p>
              <button className="btn btn-success w-75 ">Sign Up</button>
            </div>

          </div>
          <div className="col-6  text-light si">
            <div className="d-flex flex-column gap-3 p-5 ">
              <div>
                <h4>Why Us</h4>
              </div>
              <div>
                <p>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
