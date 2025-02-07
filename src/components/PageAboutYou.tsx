import NavMenu from "./NavMenu.tsx";
import Inputs from "./Inputs.tsx";
import Button from "./Button.tsx";
import { useState, useRef, type FormEvent } from "react";

type PersonData = {
  first: string;
  last: string;
  email: string;
  phone: string;
  birthYear: string;
  country: string;
};

export default function PageAboutYou() {
  const [person, setPerson] = useState<PersonData>({
    first: "",
    last: "",
    email: "",
    phone: "",
    birthYear: "",
    country: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function editName() {
    setIsEditing((isEditing) => !isEditing);
  }

  const inputFirst = useRef<HTMLInputElement>(null);
  const inputLast = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPhone = useRef<HTMLInputElement>(null);
  const inputBirthYear = useRef<HTMLInputElement>(null);
  const inputCounrty = useRef<HTMLInputElement>(null);

  // This bit is for form validation

  const [formDataInput, setformDataInput] = useState<PersonData>({
    first: "",
    last: "",
    email: "",
    phone: "",
    birthYear: "",
    country: "",
  });

  function getInputCurrentValue(event: FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    console.log(name);
    console.log(value);
    setformDataInput((prevState) => ({ ...prevState, [name]: value }));

    console.log("perhaps");
    console.log(formDataInput);
  }

  // console.log("hmmm", formDataInput);

  const formComplete =
    formDataInput.first &&
    formDataInput.last &&
    formDataInput.email &&
    formDataInput.phone &&
    formDataInput.birthYear &&
    formDataInput.country;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let personalDetails = (
    <div className="about-you-details">
      <h2>Hello {person.first}, welcome!</h2>
      <div className="details">
        <h4>Your Details</h4>
        <p>~</p>
        <p>
          Name: {person.first} {person.last}
        </p>
        <p>Email Address: {person.email}</p>
        <p>Phone Number: {person.phone}</p>
        <p>Age: {currentYear - +person.birthYear}</p>
        <p>... and we believe you were born in {person.country}</p>
      </div>
      <button onClick={editName}>Edit</button>
    </div>
  );

  if (isEditing) {
    personalDetails = (
      <div className="about-you-form">
        <h2>Lets get some details about you!</h2>
        <form onSubmit={handleSubmit}>
          <Inputs
            inputRef={inputFirst}
            labelTitle="First Name"
            inputType="text"
            inputId="first"
            inputPlaceholder="First Name"
            inputValue=""
            error="Whoops!"
            getInputValue={getInputCurrentValue}
          />
          <Inputs
            inputRef={inputLast}
            labelTitle="Last Name"
            inputType="text"
            inputId="last"
            inputPlaceholder="Last Name"
            inputValue=""
            error="Whoops!"
            getInputValue={getInputCurrentValue}
          />
          <Inputs
            inputRef={inputEmail}
            labelTitle="Email Address"
            inputType="email"
            inputId="email"
            inputPlaceholder="Email Address"
            inputValue=""
            error="Whoops!"
            getInputValue={getInputCurrentValue}
          />
          <Inputs
            inputRef={inputPhone}
            labelTitle="Phone Number"
            inputType="number"
            inputId="phone"
            inputPlaceholder="Phone Number"
            inputValue=""
            error="Whoops!"
            getInputValue={getInputCurrentValue}
          />
          <Inputs
            inputRef={inputBirthYear}
            labelTitle="Year of Birth"
            inputType="number"
            inputId="birthYear"
            inputPlaceholder="Year of Birth"
            inputValue=""
            error="Whoops!"
            getInputValue={getInputCurrentValue}
          />
          <Inputs
            inputRef={inputCounrty}
            labelTitle="Country of Birth"
            inputType="text"
            inputId="country"
            inputPlaceholder="Country of Birth"
            inputValue=""
            error="Whoops!"
            getInputValue={getInputCurrentValue}
          />
          <Button
            buttonType="submit"
            buttonText="Submit"
            disabledBoolean={!formComplete}
          />
        </form>
      </div>
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Read the form data
    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log(formData);

    const formEntries = Object.fromEntries(formData.entries());
    console.log("handle shit", formEntries.first);
    setPerson((prevPerson) => {
      return { ...prevPerson, ...formEntries };
    });
    console.log("stuff", person);
    editName();
  }

  console.log("person", person);

  return (
    <>
      <NavMenu />
      <section className="about-you">{personalDetails}</section>
    </>
  );
}
