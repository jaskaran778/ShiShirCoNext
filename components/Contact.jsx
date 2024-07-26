import "../css/About.css";

export default function Contact() {
  return (
    <div
      className="abt-cont  my-16 flex flex-wrap justify-between items-center px-20"
      id="contact"
    >
      <div className="about flex flex-wrap w-full justify-center items-center flex-col pt-12 pb-12 pl-8 pr-8">
        <div className="abt-head text-white mb-8 text-3xl font-bold text-center flex flex-wrap items-center justify-center ">
          <div className=" mr-2">Chartered accountants committed to </div>
          <div className="">your financial growth and prosperity</div>
        </div>
        <div className="abt-desc  text-justify text-xl font-medium">
          <a>
            <button
              type="submit"
              className="underline bg-white commit-btn  px-8 py-2"
            >
              <a href="mailto: Shishirandco01@gmail.com">Contact Now</a>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
