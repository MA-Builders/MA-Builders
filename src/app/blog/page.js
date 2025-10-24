export default function BlogPage() {
  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 mb-0 animated slideInLeft">Blogs</h1>
            </div>
            <div className="col-lg-6 animated slideInRight">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                  <li className="breadcrumb-item">
                    <a className="text-primary" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-secondary active"
                    aria-current="page"
                  >
                    Blogs
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
    </>
  );
}
