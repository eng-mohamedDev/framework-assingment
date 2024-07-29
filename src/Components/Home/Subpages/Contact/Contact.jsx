export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-5">
      <h3 className="uppercase font-bold text-[2.5rem]">portfolio componnet</h3>
      <div className="star-dark relative py-3">
        <i className="fa-solid fa-star text-[1.1rem]"></i>
      </div>
      <div className="container flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-baseline w-1/2">
          <div className="w-full flex relative py-8">
            <label className="text-teal-400 absolute z-0 bottom-[50%] transition-all duration-300 ease-in-out">
              userName:
            </label>
            <input
              onChange={function (e) {
                e.target.previousElementSibling.classList.add("bottom-[70%]");
              }}
              onBlur={function (e) {
                e.target.previousElementSibling.classList.remove(
                  "bottom-[70%]"
                );
              }}
              className="input bg-white relative z-10 outline-none border-b-2 w-full p-2"
              type="text"
              placeholder="userName"
            />
          </div>
          <div className="w-full flex relative py-8">
            <label className="text-teal-400 absolute z-0 bottom-[50%] transition-all duration-300 ease-in-out">
              userAge:
            </label>
            <input
              onChange={function (e) {
                e.target.previousElementSibling.classList.add("bottom-[70%]");
              }}
              onBlur={function (e) {
                e.target.previousElementSibling.classList.remove(
                  "bottom-[70%]"
                );
              }}
              className="input bg-white relative z-10 outline-none border-b-2 w-full p-2"
              type="text"
              placeholder="userAge"
            />
          </div>
          <div className="w-full flex relative py-8">
            <label className="text-teal-400 absolute z-0 bottom-[50%] transition-all duration-300 ease-in-out">
              userEmail:
            </label>
            <input
              onChange={function (e) {
                e.target.previousElementSibling.classList.add("bottom-[70%]");
              }}
              onBlur={function (e) {
                e.target.previousElementSibling.classList.remove(
                  "bottom-[70%]"
                );
              }}
              className="input bg-white relative z-10 outline-none border-b-2 w-full p-2"
              type="text"
              placeholder="userEmail"
            />
          </div>
          <div className="w-full flex relative py-8">
            <label className="text-teal-400 absolute z-0 bottom-[50%] transition-all duration-300 ease-in-out">
              userPassword:
            </label>
            <input
              onChange={function (e) {
                e.target.previousElementSibling.classList.add("bottom-[70%]");
              }}
              onBlur={function (e) {
                e.target.previousElementSibling.classList.remove(
                  "bottom-[70%]"
                );
              }}
              className="input bg-white relative z-10 outline-none border-b-2 w-full p-2"
              type="password"
              placeholder="userPassword"
            />
          </div>
          <button className="bg-teal-500 p-2 text-white rounded-lg">
            send Message
          </button>
        </div>
      </div>
    </div>
  );
}
