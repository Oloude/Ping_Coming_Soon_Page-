import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <FaFacebookF className="text-blue border border-gray rounded-full w-10 h-10 p-2 hover:bg-blue hover:text-white"/>
       <FaTwitter className="text-blue border border-gray rounded-full w-10 h-10 p-2 hover:bg-blue hover:text-white"/>
       <FaInstagram className="text-blue border border-gray rounded-full w-10 h-10 p-2 hover:bg-blue hover:text-white"/>
      </div>
        <p className="text-gray text-sm"> &copy; Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export default Footer