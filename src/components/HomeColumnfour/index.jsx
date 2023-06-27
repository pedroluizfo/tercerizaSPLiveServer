import { Img, Text } from "components";
import "../../styles/font.css"
import { useFaqData } from "context/FaqContext";

const HomeColumnfour = (props) => {
  const {setFaqData} = useFaqData()


  const handleFaqData  = ()=>{
    setFaqData(false);
  }
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start max-w-[1170px] w-full">
          {/* <div className="bg-blue_gray_900 flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[1170px] sm:px-5 px-8 py-4 w-full"> */}
          <button onClick={(handleFaqData)} className="bg-blue_gray_900 flex sm:flex-col flex-row gap-4 items-start justify-center max-w-[1200px] sm:px-5 px-8 py-4 w-full">
            <Text
              className="font-apply text-yellow_700 w-auto"
              as="h6"
              variant="h6"
              style={{fontSize:"20px"}}
            >
              {props?.comopossomecert}
            </Text>
            
            <Img
              src="images/img_chevronright.svg"
              className="h-12 w-12 rotate-[180deg]"
              alt="chevronright"
            />
            </button>
          
          <div className="bg-blue_gray_900 flex flex-col gap-4 items-center justify-center max-w-[1200px] sm:px-5 px-8 py-4 w-full">
            <Text
              className="font-apply justify-center leading-[33.00px] max-w-[600px] md:max-w-full text-white_A700 "
              variant="body2"
              style={{fontSize:"16px"}}
            >
              {props?.description}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumnfour.defaultProps = {
  comopossomecert: "Quem faz o regulatório dos produtos?",
  description:
    "Lorem ipsum dolor sit amet consectetur. Adipiscing justo nunc mattis mus turpis urna purus. Eu eget lectus aenean tincidunt vulputate et montes blandit. Proin turpis adipiscing mollis elementum. Sed enim et commodo feugiat magna.",
  description_One:
    "Lorem ipsum dolor sit amet consectetur. Adipiscing justo nunc mattis mus turpis urna purus. Eu eget lectus aenean tincidunt vulputate et montes blandit. Proin turpis adipiscing mollis elementum. Sed enim et commodo feugiat magna.",
};

export default HomeColumnfour;
