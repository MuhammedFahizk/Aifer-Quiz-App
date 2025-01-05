import { Link, Outlet } from "react-router-dom";
import Div from "../common/Div";
import Text from "../common/Text";

const Nav = () => {
  return (
    <Div className={"bg-primary h-full min-h-screen flex flex-col p-2"}>
      {/* Top Navigation Bar */}
      <Div className={"flex justify-between top-0   sticky w-full z-50  items-center rounded-xl bg-primaryLight p-5 px-10  shadow-md"}>
        {/* Logo */}
        <Text className={"text-secondary text-3xl font-bold font-mono tracking-wide"} tag={"h1"}>
          QuizPolish
        </Text>

        {/* Navigation Links */}
        <Div className={"flex space-x-8"}>
          <Link
            className="text-white text-md font-medium transition-all duration-300 hover:text-accent hover:underline"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="text-white text-md font-medium transition-all duration-300 hover:text-accent hover:underline"
            to="/test"
          >
            Test
          </Link>
          <Link
            className="text-white text-md font-medium transition-all duration-300 hover:text-accent hover:underline"
            to="/about"
          >
            About
          </Link>
        </Div>
      </Div>

      <Div className={"flex-grow bg-primary-light p-10"}>
        <Outlet />
      </Div>
    </Div>
  );
};

export default Nav;
