
const Events = () => {
  return (
    <div className="w-full lg:max-w-5xl mx-auto py-8 lg:py-16 px-2">
      <div className="flex flex-row justify-center gap-1 lg:gap-8 items-center mb-16">
        <h2 className="text-6xl  font-bold   w-full flex justify-center">45+</h2>
        <p className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita!</p>
      </div>
      <div className="flex flex-wrap  justify-center gap-5 lg:gap-32  items-center">
        <div className="flex flex-row items-center gap-4">
            <h3 className="text-3xl font-semibold">3+</h3>
            <p><span className="text-xl font-semibold">International</span><br /> Events</p>
        </div>
        <div className="flex flex-row items-center gap-4">
            <h3 className="text-3xl font-semibold">35+</h3>
            <p><span className="text-xl font-semibold">National</span><br /> Events</p>
        </div>
        <div className="flex flex-row items-center gap-4">
            <h3 className="text-3xl font-semibold">7+</h3>
            <p><span className="text-xl font-semibold">Signature</span><br /> Events</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
