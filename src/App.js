import { useEffect, useState } from "react";
import "./App.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./assets/logo/logo.png"

function App() {
  const launchDate = new Date("2025-09-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 p-6">
      <div className="w-full flex justify-between items-center mb-8 max-w-7xl">
        <div className="text-2xl font-bold text-green-800">
          <img src={Logo} alt="Logo" className="h-[53px] w-[180px] object-contain" />
        </div>
        <div className="flex items-center space-x-8">
          <span className="text-sm font-medium">Follow Us</span>
          <div className="flex space-x-8">
            <a href="#" className="text-green-800 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-green-800 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-green-800 text-lg">
              <FaInstagram />
            </a>
          </div>
          {/* <div className="ml-4 text-sm">English ▼</div> */}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-7xl w-full">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Bulk Buying, Best Prices, Simple Procurement, Launching Soon,
            </h1>

          <p className="text-gray-600 mb-4 ">
            We’re working hard behind the scenes to bring you the ultimate B2B buying experience tailored specifically for hotels, restaurants, and cafes across the Kingdom of Saudi Arabia.
          </p>

          <p className="text-gray-600 mb-4 ">
            <strong>Why wait?</strong> <br />Start shopping today at
            <a href="https://www.horecastore.ae" target="_blank" rel="noopener noreferrer" className="text-green-800 font-medium ml-1">
              www.horecastore.ae
            </a>
            — with fast shipping directly to your address anywhere in Saudi Arabia.
          </p>

          <p className="text-gray-600 mb-4 ">
            <strong>Have Inquiries or Questions?</strong><br />
            For New Hotel & Restaurant Project: 
            <br /> Contact our GM - Project & Sales -
            <a href="mailto:aslambasha@horecastore.sa" className="text-green-800 font-medium ml-1">
              Mr. Aslam Basha
            </a><br />
            General inquiries:
            <a href="mailto:hello@horecastore.sa" className="text-green-800 font-medium ml-1">
              hello@horecastore.sa
            </a>
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center border-2 border-green-700 rounded-full w-20 h-20 justify-center"
              >
                <span className="text-green-800 text-xl font-bold">{item.value}</span>
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="flex-1 w-full max-w-sm p-6 border-2 border-green-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600 mb-4">
            Reach out to us for any questions or support. We’re here to help!
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="text"
              placeholder="Enter Your Contact"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <textarea
              placeholder="Type your query..."
              rows="3"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded text-sm font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        Copyright 2025 | All Rights Reserved
      </div>
    </div>
  );
}

export default App;
