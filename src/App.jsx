import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import rightContent from './assets/images/banner.png';
import bg_cup from './assets/images/bg_cup.png';
import cup from './assets/images/cup.png';
import fresh1 from './assets/images/fresh-1.png';
import fresh2 from './assets/images/fresh-2.png';
import meet1 from './assets/images/meet-1.png';
import meet2 from './assets/images/meet-2.png';
import news1 from './assets/images/news-1.png';
import news2 from './assets/images/news-2.png';
import news3 from './assets/images/news-3.png';
import tea1 from './assets/images/tea-1.png';
import tea2 from './assets/images/tea-2.png';
import tea3 from './assets/images/tea-3.png';
import tea4 from './assets/images/tea-4.png';

function App() {

  return (
    <>
      {/* Main Section Start Here */}
      <main className="max-w-primary mx-auto">
      {/* Header Section Start Here */}
          <section className="py-10 px-6">
            <div className="flex items-center justify-between extrasmall:flex-col md:flex-row">
              <div className="header-left w-2/4 extrasmall:w-full text-center lg:w-2/4 lg:text-left">
              <h3 className="font-manrope text-heading-header text-header-heading font-extrabold leading-[100px] extrasmall:text-5xl pb-5 lg:text-left lg:text-heading-header">It's good tea time at The Tea House</h3>
              <p className="font-manrope text-header-text text-heading-para font-medium pr-9 pb-4">Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
              <div className="bg-gradient-to-l from-[#F00] to-[#FF8938] flex items-center gap-2 p-5 w-fit text-white font-manrope font-bold text-xl rounded-xl hover:bg-gradient-to-r hover:from-[#F00] hover:to-[#FF8938] transition-colors extrasmall:mx-auto mb-10 lg:mx-0">
              <button>Explore More</button>
              <HiArrowUpRight />
              </div>
            </div>
            <div className="header-right w-2/4 relative extrasmall:w-full lg:w-2/4">
              <img src={rightContent} alt="Logo" />
              <div className="flex items-center bg-white rounded-xl p-5 gap-4 shadow-[0_7px_50px_0_rgba(0,0,0,0.06)] w-fit absolute top-3/4 left-6">
                <IoStar className="text-[#FF8938] text-5xl" />
                <div>
                  <h3 className="text-header-heading font-manrope font-extrabold text-3xl">5.00</h3>
                  <p className="text-header-text font-manrope font-medium">Trust Pilot Ratings</p>
                </div>
              </div>
            </div>
            </div>
          </section>
      {/* Header Section End Here  */}

      {/* Features Product Section Start Here */}
          <section className="py-10 px-6">
            <div className="section-heading text-center">
              <h3 className="font-manrope text-5xl font-extrabold pb-5 text-header-heading">Our Featured Products</h3>
              <p className="font-manrope text-header-text font-medium text-paragraph px-24 pb-12 extrasmall:px-0 lg:px-24">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-gradient-to-b from-[#F4F4F4] to-transparent px-7 py-8 flex flex-col justify-between rounded-lg items-center text-center">
                  <img src={tea1} alt="" />
                  <h3 className="text-header-heading font-manrope font-bold text-2xl pb-2 pt-7">Milk Tea</h3>
                  <p className="text-header-text font-manrope font-semibold text-sm">Creamer could be replaced by fresh milk</p>
              </div>

              <div className="bg-gradient-to-b from-[#F4F4F4] to-transparent px-7 py-8 flex flex-col justify-between rounded-lg items-center text-center">
                  <img src={tea2} alt="" />
                  <h3 className="text-header-heading font-manrope font-bold text-2xl pb-2 pt-7">Black Tea</h3>
                  <p className="text-header-text font-manrope font-semibold text-sm">Creamer could be replaced by fresh milk</p>
              </div>

              <div className="bg-gradient-to-b from-[#F4F4F4] to-transparent px-7 py-8 flex flex-col justify-between rounded-lg items-center text-center">
                  <img src={tea3} alt="" />
                  <h3 className="text-header-heading font-manrope font-bold text-2xl pb-2 pt-7">Lemon Tea</h3>
                  <p className="text-header-text font-manrope font-semibold text-sm">Creamer could be replaced by fresh milk</p>
              </div>


              <div className="bg-gradient-to-b from-[#F4F4F4] to-transparent px-7 py-8 flex flex-col justify-between rounded-lg items-center text-center">
                  <img src={tea4} alt="" />
                  <h3 className="text-header-heading font-manrope font-bold text-2xl pb-2 pt-7">Green Tea</h3>
                  <p className="text-header-text font-manrope font-semibold text-sm">Creamer could be replaced by fresh milk</p>
              </div>
            </div>
          </section>
      {/* Features Product Section End Here */}

      {/* Freshly Presented Section Start Here */}
          <section className="py-10 px-6 pb-24">
              <div className="flex items-center gap-12 extrasmall:flex-col lg:flex-row">
                  <div className="grid grid-cols-2 grid-rows-3 gap-4 w-2/4 extrasmall:w-full lg:w-2/4">
                    <div className="bg-gradient-to-l from-red-600 to-[#FF8938] opacity-10 p-20 rounded-lg"></div>
                    <div className="row-span-2 bg-[#e6a6231a] flex items-center justify-center rounded-lg"><img src={fresh1} alt="" /></div>
                    <div className="row-span-2 bg-[#5776391a] flex items-center justify-center rounded-lg"><img src={fresh2} alt="" /></div>
                    <div className="bg-gradient-to-r from-[#D9D9D9] to-transparent rounded-lg"></div>
                  </div>
                  <div className="right w-2/4 extrasmall:w-full lg:w-2/4">
                    <h3 className="font-manrope text-5xl font-extrabold pb-5 text-header-heading pb-5">Great Tea, Freshly Presented</h3>
                    <p className="font-manrope text-header-text font-medium text-paragraph pb-8">The meaning of gong cha is chanese is to provide the best tea to emperor from all possessions . It represents the highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by its custoers  because of good words of mouth and unique customized service orginated from Taiwan.</p>
                    <h4 className="font-manrope text-header-heading font-extrabold text-xl pb-2">Unique Taste</h4>
                    <p className="font-manrope text-header-text font-medium text-paragraph pb-5">A Unique and different style from other teapots gives a luxurious and minimalist impression</p>
                    <h5 className="font-manrope text-header-heading font-extrabold text-xl pb-2">Premium Quality</h5>
                    <p className="font-manrope text-header-text font-medium text-paragraph">Premium Quality that makes tea more elegant and more durable when you use it.</p>
                  </div>
              </div>
          </section>
      {/* Freshly Presented Section Here Here */}

      {/* Meet Client Section Start Here */}
      <section className="py-10 px-6 pb-24">
        <div className="bg-gradient-to-l from-red-500 to-orange-400 px-16 py-20 rounded-lg relative">
            <div className="flex items-center justify-between extrasmall:flex-col lg:flex-row">
              <div className="left w-2/5 extrasmall:w-full lg:w-2/5">
                <h3 className="font-manrope text-5xl font-extrabold text-white pb-5">Meet Our Super Clients</h3>
                <p className="font-manrope text-white font-medium text-paragraph pb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className="py-4 px-8 bg-white rounded-lg hover:bg-black transition-colors"><a href="#" className="font-manrope font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 hover:text-transparent hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400 transition-colors">Show All</a></button>
              </div>
              <div className="right w-2/4 extrasmall:w-full lg:w-2/4">
                <div className="flex flex-col items-center gap-4 relative">
                  <img src={meet2} alt="" className="opacity-15" />
                  <img src={meet2} alt="" className="opacity-15" />
                  <img src={meet1} alt="" className="absolute top-1/4 -left-14"/>
                </div>
              </div>
            </div>
            <img src={bg_cup} alt="" className="absolute bottom-0 left-1/4 transform -translate-x-1/4 extrasmall:hidden lg:block" />
        </div>
      </section>
      {/* Meet Client Section End Here */}

      {/* News Event Section Start Here */}
      <section className="py-10 px-6 pb-24">
        <div className="section-heading text-center">
              <h3 className="font-manrope text-5xl font-extrabold pb-5 text-header-heading">News & Events</h3>
              <p className="font-manrope text-header-text font-medium text-paragraph px-24 pb-12 extrasmall:px-0 lg:px-24">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
        </div>
        <div className="grid grid-cols-3 gap-6 extrasmall:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border border-gray-400 rounded-lg">
            <img src={news1} alt="" className="rounded-lg w-full" />
            <h2 className="font-manrope text-header-text font-medium text-paragraph pt-5">Feb 05, 2027</h2>
            <h3 className="font-manrope text-header-heading font-extrabold text-2xl py-2">Collecting 8 points for discount</h3>
            <p className="font-manrope text-header-text font-medium text-paragraph py-4">There are many variations of passages of Lorem Ipsum available.</p>
            <a href="#" className="font-manrope font-semibold text-paragraph hover:text-orange-600 transition-colors">Learn More</a>
          </div>

          <div className="p-6 border border-gray-400 rounded-lg">
            <img src={news2} alt="" className="rounded-lg w-full" />
            <h2 className="font-manrope text-header-text font-medium text-paragraph pt-5">Feb 05, 2027</h2>
            <h3 className="font-manrope text-header-heading font-extrabold text-2xl py-2">Collecting 8 points for discount</h3>
            <p className="font-manrope text-header-text font-medium text-paragraph py-4">There are many variations of passages of Lorem Ipsum available.</p>
            <a href="#" className="font-manrope font-semibold text-paragraph hover:text-orange-600 transition-colors">Learn More</a>
          </div>

          <div className="p-6 border border-gray-400 rounded-lg">
            <img src={news3} alt="" className="rounded-lg w-full" />
            <h2 className="font-manrope text-header-text font-medium text-paragraph pt-5">Feb 05, 2027</h2>
            <h3 className="font-manrope text-header-heading font-extrabold text-2xl py-2">Collecting 8 points for discount</h3>
            <p className="font-manrope text-header-text font-medium text-paragraph py-4">There are many variations of passages of Lorem Ipsum available.</p>
            <a href="#" className="font-manrope font-semibold text-paragraph hover:text-orange-600 transition-colors">Learn More</a>
          </div>
        </div>
      </section>
      {/* News Event Section End Here */}
      </main>
      {/* Main Section End Here */}
      {/* Footer Section Start Here */}
      <footer className="bg-[linear-gradient(270deg,rgba(255,0,0,0.1)_0%,rgba(255,137,56,0.1)_100%)] py-10 px-6 pb-24">
          <div className="max-w-primary mx-auto py-10">
            <div className="flex items-center justify-between">
              <div><img src={cup} alt="" /></div>
              <div className="flex items-center gap-4">
                <h3>Ready to get strated?</h3>
                <a href="#" className="bg-gradient-to-l from-[#F00] to-[#FF8938] flex items-center gap-2 px-4 py-3 w-fit text-white font-manrope font-bold text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#F00] hover:to-[#FF8938] transition-colors">Get Started</a>
              </div>
            </div>
            <div className="grid grid-cols-4 mt-14 extrasmall:grid-cols-2 gap-8 md:grid-cols-2 gap-8 lg:grid-cols-4">
              <div>
                <h3 className="font-manrope text-header-heading font-extrabold text-xl py-2">Quick Links</h3>
                <ul>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">Home</li></a>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">About Us</li></a>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">Insurance</li></a>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">Privacy Policy</li></a>
                </ul>
              </div>

              <div>
                <h3 className="font-manrope text-header-heading font-extrabold text-xl py-2">Our Service</h3>
                <ul>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">Life Insurance</li></a>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">Car Insurance</li></a>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">Health Insurance</li></a>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">House Insurance</li></a>
                </ul>
              </div>

              <div>
                <h3 className="font-manrope text-header-heading font-extrabold text-xl py-2">Help</h3>
                <ul>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">FAQs</li></a>
                  <a href="#" className="font-manrope text-header-text font-medium text-paragraph"><li className="py-2">Contact Us</li></a>
                </ul>
              </div>

              <div>
                <h3 className="font-manrope text-header-heading font-extrabold text-xl py-2">Subscribe to our newsletter</h3>
                <div className="flex items-center">
                <input type="text" placeholder="Email address" className="bg-transparent border-b border-b-gray-300 px-4 py-2 w-full mt-4 outline-none" />
                <a href="#" className="bg-gradient-to-l from-[#F00] to-[#FF8938] rounded-full p-2 flex items-center justify-center text-white"><IoIosArrowForward /></a>
                </div>
                <div className="flex items-center gap-4 text-2xl mt-10">
                <a href="#" className="hover:text-[#3B5998] transition-colors"><FaFacebookF  /></a>
                <a href="#" className="hover:text-[#1DA1F2] transition-colors"><FaTwitter  /></a>
                <a href="#" className="hover:text-[#C13584] transition-colors"><RiInstagramFill  /></a>
              </div>
              </div>
            </div>
            <div>
              <p className="font-manrope text-header-text font-medium text-paragraph text-center mt-20">© 2027 UIDesign.to - All rights reserved.</p>
            </div>
          </div>
      </footer>
      {/* Footer Section End Here */}
    </>
  )
}

export default App
