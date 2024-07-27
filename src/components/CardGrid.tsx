function CardGrid() {
  return (
    <>
      <div className=" mt-32 mb-44 bg-no-repeat nav-container">
        <div className=" flex bg-no-repeat">
          <div className="grid md:grid-cols-2  grid-cols-1  gap-5 ">
            <div className="gap-10 grid">
              <img className="rounded-2xl" src="card1.png" alt="" />
            </div>
            <div className=" bg-no-repeat">
              <div className="grid grid-cols-2 gap-6">
                <img src="card2.png" alt="" />
                <img src="card3.png" alt="" />
                <img src="card4.png" alt="" />
                <img src="card5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-y-5 mt-[20px]">
          <img src="img.png" alt="" />
          <img src="card6.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default CardGrid;
