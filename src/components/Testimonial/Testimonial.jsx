import React from "react";

const testimonialData = [
  {
    name: "Ashok Pathak",
    image: "",
    description: "विंध्य मोटर्स का अनुभव बहुत ही शानदार रहा। उनके पास मेरी गाड़ी की सभी समस्याओं का समाधान था। सर्विस तेज़, भरोसेमंद और किफायती थी। स्टाफ बहुत ही पेशेवर और सहयोगी है, और उनके पास हर प्रकार की वाहन सेवाएं उपलब्ध हैं। मिर्जापुर और वाराणसी में उनके केंद्र ने मुझे हमेशा बेहतरीन अनुभव दिया है। मैं निश्चित रूप से इसे दूसरों को भी सलाह दूंगा।",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Vindhya Motors has been a reliable choice for my vehicle needs. Their service is efficient, and the staff is knowledgeable and friendly. I appreciate the variety of services they offer, from basic maintenance to more complex repairs. Both the Mirzapur and Varanasi centers have consistently delivered quality service. I’m very satisfied and highly recommend Vindhya Motors to anyone looking for trustworthy car care.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "विंध्य मोटर्स मेरी गाड़ी के लिए एक भरोसेमंद विकल्प रहा है। उनकी सेवा तेज़ और कुशल है, और स्टाफ बहुत जानकार और सहयोगी है। मुझे उनकी सेवाओं की विविधता पसंद आई, जिसमें सामान्य मेंटेनेंस से लेकर जटिल रिपेयर तक शामिल हैं। मिर्जापुर और वाराणसी दोनों केंद्रों ने हमेशा गुणवत्तापूर्ण सेवा दी है। मैं बहुत संतुष्ट हूँ और इसे किसी भी गाड़ी के देखभाल के लिए निश्चित रूप से सलाह दूंगा",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Range Of Services Available At VindhyaMotors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
