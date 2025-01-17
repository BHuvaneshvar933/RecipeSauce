import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-zinc-900 text-white font-noto-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          <h1 className="font-semibold text-3xl">
            RECIPE<span className="text-orange-500">SAUCE</span>
          </h1>
          <p className="text-sm text-neutral-300">
            Your go-to destination for mouthwatering recipes and culinary
            inspiration. Discover flavors that excite, tips that simplify, and
            dishes that bring everyone together.
          </p>
          <p className="text-xs text-neutral-500">
            &#169; ALL RIGHTS RESERVED BY RecipeSauce
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  About us
                </Link>
              </li>
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  Our scores
                </Link>
              </li>
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  View event
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Beyond</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  Our team
                </Link>
              </li>
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  Media Mentions
                </Link>
              </li>
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  Income Reports
                </Link>
              </li>
              <li>
                <Link className="text-xs text-neutral-400 hover:text-orange-500">
                  Recipe Index
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <ul className="flex gap-4">
              <li>
                <Link className="text-neutral-400 hover:text-orange-500">
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-orange-500">
                  <FaTwitch size={20} />
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-orange-500">
                  <FaFacebook size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <input
            type="email"
            className="w-full sm:w-auto bg-zinc-800 text-sm px-4 py-2 text-white placeholder-neutral-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your Email"
          />
          <button className="bg-orange-500 px-4 py-2 text-sm rounded hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
