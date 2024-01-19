import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // const [isValidEmail, setIsValidEmail] = useState(null as boolean | null);

  const [isSending, setIsSending] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmail("");
    setSubject("");
    setMessage("");

    setIsSending(true);

    try {
      axios
        .post(
          "/api/email",
          {
            email,
            subject,
            message,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // check if the response is successful
          if (res.status === 200) {
            // alert("Message sent successfully!");
            console.log("Message sent successfully!");

            setIsSending(false);
          } else {
            // alert("Message failed to send");
            console.error("Message failed to send");
            setIsSending(false);
          }
        })
        .catch((err) => {
          // if there is an error, log it to the console
          console.error(err);
          alert("Message failed to send");
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-[25rem]">
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label>
            <h1 className="text-lg uppercase text-black">Email Address:</h1>
            <p className="text-sm italic text-black/50">
              We will never share your email with anyone else.
            </p>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Vaild Email"
              className={`w-full rounded-md border-2  p-2 outline-none focus:border-gray-500 ${"border-gray-600"}`}
            />
          </label>
          <label>
            <h1 className="text-lg uppercase text-black">Subjet:</h1>

            <input
              type="text"
              value={subject}
              onChange={handleSubjectChange}
              placeholder="Subject"
              className="w-full rounded-md border-2 border-gray-600 p-2 outline-none focus:border-gray-500"
            />
          </label>

          <label>
            <h1 className="text-lg uppercase text-black">Message:</h1>
            <textarea
              name="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="What do you want us to know?"
              className="w-full resize-none rounded-md border-2 border-gray-600 p-2 outline-none focus:border-gray-500"
              // set a fixed height to prevent the textarea from resizing
              style={{ height: "200px", width: "100%" }}
            />
          </label>

          <button
            type="submit"
            className="flex w-fit rounded-full bg-maroon px-4 py-2 text-left text-sm text-white transition-colors hover:bg-black"
          >
            {
              // add a loading spinner or text to indicate that the message is being sent
              // this is optional, but can be useful.
              // see https://loading.io/css/
              isSending ? "Sending..." : "Send Message"
            }
          </button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
