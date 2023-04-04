import "../styles/infoStyles.css";
export default function Info() {
  const date = new Date();
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  // const align-h={text}
  return (
    <div className="bg-news">
      <hr />
      <h1 className="align">Information</h1>
      <div className="info-detail">
        <main className="cards">
          <section className="card card-one">
            <div className="top">
              <div className="date">
                {date.getUTCDate()} {mS[date.getMonth()]} {date.getFullYear()}
              </div>
              <div className="actions">
                <i className="fa-regular fa-bookmark"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-share-nodes"></i>
              </div>
            </div>
            <div className="bottom">
              <div className="author">
                <div>
                  <img
                    className="author-img"
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="topimage"
                  />
                </div>
                <span>Wikipedia</span>
              </div>
              <h1>Stocks</h1>
              <div className="text">
                <p>
                  A stock, also known as equity, is a security that represents
                  the..
                </p>
                <button>Read More</button>
              </div>
            </div>
          </section>
        </main>
        <main className="cards">
          <section className="card card-two">
            <div className="top">
              <div className="date">
                {date.getUTCDate()} {mS[date.getMonth()]} {date.getFullYear()}
              </div>
              <div className="actions">
                <i className="fa-regular fa-bookmark"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-share-nodes"></i>
              </div>
            </div>
            <div className="bottom">
              <div className="author">
                <div>
                  <img
                    className="author-img"
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    alt="topimage"
                  />
                </div>
                <span>Wikipedia</span>
              </div>
              <h1>Bitcoin</h1>
              <div className="text">
                <p>
                  The digital currency was intended to provide an alternative..
                </p>
                <button>Read More</button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="info-detail">
        <main className="cards">
          <section className="card card-three">
            <div className="top">
              <div className="date">
                {date.getUTCDate()} {mS[date.getMonth()]} {date.getFullYear()}
              </div>
              <div className="actions">
                <i className="fa-regular fa-bookmark"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-share-nodes"></i>
              </div>
            </div>
            <div className="bottom">
              <div className="author">
                <div>
                  <img
                    className="author-img"
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="topimage"
                  />
                </div>
                <span>Wikipedia</span>
              </div>
              <h1>Funds</h1>
              <div className="text">
                <p>
                  A fund is a type of investment that collects money from
                  many...
                </p>
                <button>Read More</button>
              </div>
            </div>
          </section>
        </main>
        <main className="cards">
          <section className="card card-four">
            <div className="top">
              <div className="date">
                {date.getUTCDate()} {mS[date.getMonth()]} {date.getFullYear()}
              </div>
              <div className="actions">
                <i className="fa-regular fa-bookmark"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-share-nodes"></i>
              </div>
            </div>
            <div className="bottom">
              <div className="author">
                <div>
                  <img
                    className="author-img"
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    alt="topimage"
                  />
                </div>
                <span>Wikipedia</span>
              </div>
              <h1>Bonds</h1>
              <div className="text">
                <p>
                  {" "}
                  A bond is a debt security, similar to an IOU. Borrowers
                  issue...
                </p>
                <button>Read More</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
