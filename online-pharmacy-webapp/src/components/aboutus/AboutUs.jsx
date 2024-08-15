import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <section className="text-center text-gray-600 my-5">
      <div className="container px-5 py-10 mx-auto">

        <h1 className="text-center text-3xl font-bold text-black mb-4">About the founders</h1>

        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="text-center">
              <img alt="testimonial" className="rounded-circle border-2 border-gray-200 mb-3" src="/03.jpg" style={{ width: "80px", height: "80px" }} />
              <div className="my-4">
                <div className="w-10 h-1 mx-auto bg-pink-500 rounded" />
              </div>
              <h2 className="text-gray-900 font-medium text-sm text-uppercase">Shardul Keer</h2>
              <p className="text-gray-500">Project Leader</p>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="text-center">
              <img alt="testimonial" className="rounded-circle border-2 border-gray-200 mb-3" src="/02.jpeg" style={{ width: "80px", height: "80px" }} />
              <div className="my-4">
                <div className="w-10 h-1 mx-auto bg-pink-500 rounded" />
              </div>
              <h2 className="text-gray-900 font-medium text-sm text-uppercase">Kunal Borse</h2>
              <p className="text-gray-500">UI Developer</p>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="text-center">
              <img alt="testimonial" className="rounded-circle border-2 border-gray-200 mb-3" src="/04.jpeg" style={{ width: "80px", height: "80px" }} />
              <div className="my-4">
                <div className="w-10 h-1 mx-auto bg-pink-500 rounded" />
              </div>
              <h2 className="text-gray-900 font-medium text-sm text-uppercase">Shaurya Singh</h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="text-center">
              <img alt="testimonial" className="rounded-circle border-2 border-gray-200 mb-3" src="/01.png" style={{ width: "80px", height: "80px" }} />
              <div className="my-4">
                <div className="w-10 h-1 mx-auto bg-pink-500 rounded" />
              </div>
              <h2 className="text-gray-900 font-medium text-sm text-uppercase">Shantanu Darlinge</h2>
              <p className="text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
