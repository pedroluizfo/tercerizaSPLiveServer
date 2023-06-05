import {
    Button,
    Img,
    Line,
    Text,
} from "components";
import HomeColumnfour from "components/HomeColumnfour";
import React, { useState } from "react"
import { useFaqData } from "../../context/FaqContext"

const FaqComponent = ({ faqProps }) => {
    
    const {faqData, setFaqData} = useFaqData()
    const isClosed = faqData;
    const [faqOpen, setFaqOpen] = useState(false);

    const handleFaqOpen = () => {
        setFaqData(true)

    }


    return (
        <div className="flex flex-col font-arboria gap-4 items-center justify-start max-w-[1170px] mx-auto w-full">


            {faqData ?
                <>
                    <Line className="bg-yellow_700_3f h-0.5 rotate-[-180deg] w-[52%]" />
                    <HomeColumnfour
                        className="bg-blue_gray_900 flex flex-col gap-4 items-start justify-start max-w-[1170px] w-full"
                        comopossomecert={faqProps.title}
                        description={faqProps.description}
                    />

                </>

                :

                <>
                    <Line className="bg-yellow_700_3f h-0.5 rotate-[-180deg] w-[52%]" />
                    <button onClick={(handleFaqOpen)} className="bg-blue_gray_900 flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[1170px] sm:px-5 px-8 py-4 w-full">
                        <Text
                            className="font-arboria leading-[33.00px] max-w-[1016px] md:max-w-full text-white_A700"
                            variant="body2"
                        >
                            {faqProps.title}
                        </Text>
                        

                            <Img
                                src="images/img_chevronright_white_a700.svg"
                                className="h-12 w-12"
                                alt="chevronrightone"
                            />
                        </button>

              
                </>

            }


        </div>
    )

}

export default FaqComponent