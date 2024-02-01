
const NewsLetter = () => {
    return (
        <div className="bg-[#07073A]  flex justify-center text-neutral-content  px-4 py-8 lg:py-20"> {/* Add the previous background color and text color here */}
            <form>
                <h6 className="footer-title text-xl lg:text-3xl text-neutral-content">Subscribe To Our Newsletter</h6>
                <fieldset className="form-control w-full  lg:max-w-6xl mx-auto">
                    <label className="label">
                        <span className="label-text text-md w-[90%] lg:w-[60%]  lg:text-lg text-neutral-content">For the debate enthusiasts,we present our online publication newsletter. Get news of every week around the world. So,Subscribe to our newsletter to stay updated with the world of debate</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="Enter your Email Address" className="input input-bordered w-full lg:w-[45vh] join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default NewsLetter;
