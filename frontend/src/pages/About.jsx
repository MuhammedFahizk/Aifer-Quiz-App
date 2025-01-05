import Div from "../component/common/Div";
import Text from "../component/common/Text";

const AboutUs = () => {
  return (
    <Div className="min-h-fit bg-primary-light flex flex-col justify-center items-center text-white">
      <Text tag="h1" className="text-4xl font-bold mb-4">
        About Us
      </Text>
      <Div className="bg-primary rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
        <Text tag="p" className="text-lg text-gray-200 mb-6">
          Welcome to our quiz site! Our mission is to create fun and engaging quizzes to help you learn and test your knowledge in a variety of topics. We are dedicated to providing a seamless and enjoyable experience for everyone who loves challenges.
        </Text>
        <Text tag="p" className="text-lg text-gray-200 mb-6">
          Our team consists of passionate individuals who believe in the power of learning through interactive experiences. With our quizzes, we aim to promote creativity, critical thinking, and knowledge sharing. Whether you're here to challenge yourself or learn something new, we've got something for you.
        </Text>
        <Text tag="p" className="text-lg text-gray-200">
          Thank you for choosing us, and we hope you enjoy the quizzes!
        </Text>
      </Div>
    </Div>
  );
};

export default AboutUs;
