import "./Home.css";
export const Home = ({ data }) => {
  return (
    <>
      <div className="Productos">
        {data.map((item, index) => (
          <div key={index} className="cards">
            <img src={item.image} alt="" className="producto__img" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
