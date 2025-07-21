import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background: #343942;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;
  // Email Subscription State & Handlers
  const [email, setEmail] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px" }}>
              <Box className={"foot-category-title"}>
              Gusto Contacts 
              </Box >
              <Box className={"foot-cover"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
                  <path d="M14 6.7962C13.9664 7.66287 13.815 8.46358 13.543 9.24655C13.2622 10.0544 12.9098 10.8295 12.4849 11.5735C12.0572 12.3217 11.576 13.038 11.0642 13.7352C10.4222 14.6111 9.73993 15.4565 8.99701 16.2529C8.46688 16.8217 7.90896 17.3657 7.36347 17.9203C7.34226 17.9416 7.32106 17.9629 7.29766 17.982C7.08999 18.1586 6.90134 18.1622 6.70026 17.9756C6.44506 17.7395 6.19498 17.4976 5.95076 17.2508C5.37383 16.6678 4.81737 16.0664 4.28578 15.4437C3.40466 14.4104 2.5952 13.3281 1.87422 12.1827C1.20954 11.126 0.672099 10.0125 0.314534 8.82173C0.164635 8.32315 0.0768884 7.81251 0.0235096 7.29478C-0.0167074 6.904 -0.00135182 6.51464 0.0395964 6.12882C0.120761 5.35648 0.315265 4.61109 0.665518 3.90754C0.904627 3.4274 1.1781 2.96925 1.52543 2.55648C1.90274 2.10683 2.32173 1.69903 2.8036 1.35151C3.45365 0.88272 4.16366 0.530238 4.93583 0.297614C5.30656 0.185557 5.68606 0.101869 6.07287 0.0614435C6.33977 0.0344931 6.60666 -0.00380477 6.87209 -0.000258674C7.24721 0.00470587 7.62378 0.0302378 7.9967 0.0735002C8.51002 0.133075 9.00725 0.26499 9.49204 0.443004C9.92566 0.602578 10.3344 0.808252 10.7278 1.04442C11.2784 1.37563 11.7617 1.78343 12.1975 2.2501C12.6385 2.72173 12.9909 3.24655 13.2827 3.81464C13.5635 4.36286 13.7565 4.93733 13.8669 5.53804C13.9181 5.81535 13.9378 6.09833 13.9678 6.37989C13.9839 6.53237 13.9912 6.68556 14 6.7962ZM6.99274 2.99478C4.72743 3.06215 3.07854 4.72315 3.10705 6.82882C3.1363 8.98627 4.84296 10.5359 7.04027 10.5849C9.3224 10.4806 10.9165 8.82244 10.8894 6.74726C10.8609 4.57776 9.13594 3.04726 6.99274 2.99478Z" fill="#C0A677"/>
                  </svg>
                  <Box className={"foot-desc-txt"}>
                    Riverside 25, Daejeon, Korea
                  </Box>
              </Box>
              <Box className={"foot-cover"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.18539 6.92227C4.53596 9.51913 6.49357 11.4588 9.06157 12.8041C9.116 12.7506 9.1654 12.7021 9.21396 12.6536C9.67699 12.1912 10.1434 11.7331 10.6005 11.2649C10.907 10.9513 11.2587 10.7306 11.6974 10.6721C11.8615 10.6503 12.0315 10.6386 12.1948 10.6554C12.734 10.7105 13.2715 10.7791 13.8091 10.8468C14.1046 10.8844 14.4061 10.907 14.6941 10.9789C15.4192 11.1603 15.9182 11.7556 15.9685 12.4563C16.0036 12.9479 15.9969 13.442 16.002 13.9353C16.0036 14.115 15.9953 14.2965 15.9743 14.4754C15.8705 15.3708 15.0332 16.0506 14.1817 15.997C13.3402 15.9435 12.5096 15.8298 11.689 15.64C10.2572 15.3081 8.89914 14.7839 7.62393 14.0532C6.70457 13.5256 5.8455 12.9136 5.05173 12.2071C3.81337 11.1052 2.78097 9.83516 1.95539 8.4038C1.32407 7.31105 0.840107 6.15057 0.511885 4.92739C0.322654 4.22258 0.166916 3.51191 0.08821 2.78536C0.0513687 2.44006 0.0145274 2.09393 0.00280521 1.74779C-0.0139408 1.22942 0.200408 0.807206 0.583055 0.462742C0.948956 0.133328 1.38268 0.00122804 1.8658 0.00206411C2.31794 0.00290019 2.77092 -0.00295235 3.22307 0.00373627C3.64004 0.00958881 4.03358 0.0948686 4.37771 0.357397C4.73691 0.63163 4.96968 0.984454 5.05676 1.42172C5.12039 1.7411 5.14886 2.06717 5.18654 2.39074C5.23594 2.81881 5.26441 3.24939 5.32888 3.67495C5.42936 4.33712 5.24766 4.89395 4.77124 5.36299C4.29481 5.83119 3.82592 6.30692 3.35201 6.77847C3.30345 6.8278 3.24735 6.8696 3.18539 6.92227Z" fill="#C0A677"/>
                  </svg>
                  <Box className={"foot-desc-txt"}>
                   02-9600-0000
                  </Box>
              </Box>
              <Box className={"foot-cover"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                  <g clip-path="url(#clip0_106_221)">
                  <path d="M0.00213623 1.7923C2.85886 3.75477 5.6757 5.68961 8.50287 7.63172C11.3234 5.68234 14.1425 3.73368 16.9874 1.76758C16.9933 1.86138 17.0007 1.92609 17.0007 1.99007C17.0014 3.50683 17.0014 5.0243 17.0014 6.54106C17.0014 8.02145 17.0007 9.50185 17.0014 10.983C17.0014 11.3378 16.9578 11.6861 16.7806 11.9995C16.4357 12.6081 15.9113 12.9622 15.1949 12.9898C14.6676 13.0094 14.1388 12.9963 13.6107 12.9963C10.2326 12.9963 6.85369 12.9963 3.47555 12.9963C2.92311 12.9963 2.3692 13.0087 1.8175 12.9905C1.09224 12.9665 0.565652 12.6073 0.219271 11.9907C0.0590048 11.705 0.00435189 11.3872 0.00435189 11.0637C0.00361334 9.62546 0.0073061 8.18723 0.00804465 6.74828C0.00804465 6.06553 0.00435189 5.38277 0.00361334 4.70001C0.00287478 3.81148 0.00361334 2.92296 0.00361334 2.03443C0.00213623 1.96899 0.00213623 1.90355 0.00213623 1.7923Z" fill="#C0A677"/>
                  <path d="M8.49994 5.36317C5.99625 3.6421 3.5221 1.94066 1.02875 0.227591C1.29537 0.0748983 1.55829 0.00800414 1.83599 0.00436859C2.3707 -0.00144829 2.90467 0.000733036 3.43938 0.000733036C6.83672 0.000733036 10.2341 0.000733036 13.6314 5.92589e-06C14.1166 5.92589e-06 14.6019 0.00146015 15.0871 5.92589e-06C15.3869 -0.000721184 15.6698 0.0654458 15.9556 0.208686C13.4652 1.93048 10.9852 3.64501 8.49994 5.36317Z" fill="#C0A677"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_106_221">
                  <rect width="17" height="13" fill="white" transform="translate(0.00213623)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <Box className={"foot-desc-txt"}>
                    hirestaurantat@gmail.com
                  </Box>
              </Box>
              <Box className="sns-context">
              <img src={"/icons/facebook.svg"} />
              <img src={"/icons/twitter.svg"} />
              <img src={"/icons/instagram.svg"} />
              <img src={"/icons/youtube.svg"} />
              {/* <img src={"/icons/youtube.svg"} /> */}
              </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Newsletter</Box>
                <Box className={"foot-desc-txt"} marginLeft={"0px"}>Subscribe to our newsletter and get our latest updates.</Box>
               {/* Email Subscription Form */}
               <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="     Email address"
                    style={{
                      padding: "8px",
                      border: "2px solid #ccc",
                      borderRadius: "40px 0px 0px 0px",
                      width: "380px",
                      height: "60px",
                      fontFamily: "serif",
                      fontSize: "20px",
                      color: "#C0A677",
                      background: "#343942",
                    }}
                  />
                  <button
                  className="subscribe"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright The Gusto Restaurant Inc, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
