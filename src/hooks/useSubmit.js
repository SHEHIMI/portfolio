import { useState } from "react";
import emailjs from "emailjs-com";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      // Replace these with your actual EmailJS Service ID, Template ID, and User ID
      const SERVICE_ID = "service_y3dux9n";
      const TEMPLATE_ID = "template_tsxv0uh";
      const USER_ID = "ytgZDvQ23cebhSOtP";

      console.log(data);
      // send the email
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstName: data.firstName,
          email: data.email,
          type: data.type,
          comment: data.comment,
        },
        USER_ID
      );
      console.log(res);
      // Check response status
      if (res.status === 200 && res.text === "OK") {
        setResponse({
          type: "success",
          message: `Thanks for your submission ${data.firstName}, I will get back to you shortly!`,
        });
      } else {
        setResponse({
          type: "error",
          message: "Something went wrong, please try again later!",
        });
      }
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
