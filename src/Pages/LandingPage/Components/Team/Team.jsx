import "./Team.scss";
const Team = () => {
  const teamContent = [
    {
      teamImg: "images/Clip6.png",
      name: "Faiz Xerio1",
      designation: "ARTIST1",
    },
    {
      teamImg: "images/Clip7.png",
      name: "Faiz Xerio2",
      designation: "ARTIST2",
    },
    {
      teamImg: "images/Clip8.png",
      name: "Faiz Xerio3",
      designation: "ARTIST3",
    },
    {
      teamImg: "images/Clip9.png",
      name: "Faiz Xerio4",
      designation: "ARTIST4",
    },
  ];
  return (
    <div id="team" className="team-block spacing">
      <div className="container">
        <div className="heading">
          <h1>Meet Our Team</h1>
          <p>Who behind this cool project?</p>
        </div>
        <div className="team-content-block border-bottom">
          <div className="row">
            {teamContent.map((value) => (
              <div className="col col-3">
                <div className="team-content">
                  <div className="team-img">
                    <img src={value.teamImg} />
                  </div>
                  <div className="team-text">
                    <h2>{value.name}</h2>
                    <p>{value.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
