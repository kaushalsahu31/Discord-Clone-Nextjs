"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export const  Forth = () => {

    const [isMounted,setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if(!isMounted) return null;
    
    return (
      <section className="w-[100] h-[100vh] grid place-items-center">
        <div className="grid">
          <div className="w-full max-w-[500px]">
        
           
            <Image
              width={300}
              height={200}
              className="w-full invert-[1]"
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/create-animated-gif/jcr_content/main-pars/image_4389415/create-animated-gif_3a-v2.gif"
              alt=""
            />
            <h2 className="text-[22px] font-semibold text-center text-[rgb(134,123,123)] tracking-[1px]">
              {`"Stay in the loop and connect with me on my digital playground! 🌐
              #LetsTechTogether"`}
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(3,1fr)]">
            <div className="grid place-items-center light-button">
              <a target="_blank" href="https://www.instagram.com/kaushal__sahu/">
                <button className="bt">
                  <div className="light-holder">
                    <div className="dot"></div>
                    <div className="light"></div>
                  </div>
                  <div className="button-holder flex flex-col items-center justify-center h-[100px] w-[100px] bg-[#0a0a0a] text-[#0f0f0f] font-bold transition-[300ms] outline-offset-[20] rounded-[5px] outline-[rgba(160, 32, 240, 1) 2px solid]">
                    <svg
                      viewBox="0,0,256,256"
                      width="50px"
                      height="50px"
                      fillRule="nonzero"
                      className="instagram"
                    >
                      <g
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8,8)">
                          <path
                            d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <p>Instagram</p>
                  </div>
                </button>
              </a>
            </div>
            <div className="grid place-items-center light-button">
              <a target="_blank" href="https://github.com/kaushalsahu31">
                <button className="bt">
                  <div className="light-holder">
                    <div className="dot"></div>
                    <div className="light"></div>
                  </div>
                  <div className="button-holder flex flex-col items-center justify-center h-[100px] w-[100px] bg-[#0a0a0a] text-[#0f0f0f] font-bold transition-[300ms] outline-offset-[20] rounded-[5px] outline-[rgba(160, 32, 240, 1) 2px solid]">
                    <svg
                      viewBox="0 0 30 30"
                      width="50px"
                      height="50px"
                      className="github"
                    >
                      <path
                        d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                      ></path>
                    </svg>
                    <p>Github</p>
                  </div>
                </button>
              </a>
            </div>
            <div className="grid place-items-center light-button">
              <a target="_blank" href="https://www.linkedin.com/in/kaushal-kumar-9353451a1/">
                <button className="bt">
                  <div className="light-holder">
                    <div className="dot"></div>
                    <div className="light"></div>
                  </div>
                  <div className="button-holder flex flex-col items-center justify-center h-[100px] w-[100px] bg-[#0a0a0a] text-[#0f0f0f] font-bold transition-[300ms] outline-offset-[20] rounded-[5px] outline-[rgba(160, 32, 240, 1) 2px solid]">
                    <svg
                      viewBox="0 -2 44 44"
                    >
                      <g id="Icons" stroke="none" strokeWidth="1">
                        <g transform="translate(-702.000000, -265.000000)">
                          <path
                            d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                            id="LinkedIn"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <p>Linkedin</p>
                  </div>
                </button></a>
            </div>
          </div>
        </div>
  
      </section>
    )
  }
  
  