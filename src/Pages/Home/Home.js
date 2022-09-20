import ContactForm from "../../Components/ContactForm/ContactForm";
import Content1 from "../../Components/Content-1/Content1";
import Landing from "../../Components/Landing/Landing";

function Home() {
  return ( 
    <>
      <Landing />
      <div className="my-3">
        <Content1 />
      </div>
      <div className="my-3">
       <ContactForm /> 
      </div>
    </>

  );
}

export default Home;