"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Scene from "./Scene";
import { View } from "@react-three/drei";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function HeroSection() {
  const heroRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set([".hero-text", ".sub-text", ".btn-hero", ".body-text"], {
      opacity: 0,
    })
      .from(".hero-text", {
        scale: 3,
        opacity: 1,
        duration: 1,
        ease: "back(2)",
        stagger: 1,
      })
      .from(
        ".sub-text",
        {
          opacity: 1,
          y: 30,
        },
        "+=0.5"
      )
      .from(".body-text", {
        opacity: 1,
        y: 30,
      })
      .from(".btn-hero", {
        opacity: 1,
        y: 30,
      });

    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main_wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .fromTo(
        "body",
        {
          backgroundColor: "#FDE047",
        },
        {
          backgroundColor: "#D9F99D",
          overwrite: "auto",
          ease: "expoScale(0.5,7,none)",
        },
        1
      )
      .from(".flavour_text", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".flavour_body", {
        y: 20,
        opacity: 0,
      });
  });
  return (
    <Box
      className="main_wrapper"
      sx={{
        padding: " 4rem 0px",
      }}
    >
      <Box
        ref={heroRef}
        className="hero_wrapper"
        sx={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <View
          className="hero-scene"
          style={{
            position: "sticky",
            top: 0,
            height: "100dvh",
            width: "100vw",
            display: {
              xs: "none",
              md: "block",
            },
            pointerEvents: "none",
            zIndex: 50,
            marginTop: "-100dvh",
          }}
        >
          <Scene />
        </View>
        <Typography
          className="hero-text"
          variant="h1"
          component="h1"
          align="center"
          sx={{
            color: "#f97316",
            fontSize: "15rem",
            lineHeight: "11rem",
            textTransform: "capitalize",
            opacity: 0,
          }}
        >
          {/* {textSplitter("Live gutsy")} */}
          Live <br /> gutsy
        </Typography>
        <Typography
          className="sub-text"
          sx={{
            fontSize: "3rem",
            fontWeight: 600,
            opacity: 0,
          }}
          variant="h3"
          component="h3"
          align="center"
        >
          Soda perfected
        </Typography>
        <Typography
          className="body-text"
          align="center"
          sx={{
            fontSize: "1.3rem",
            opacity: 0,
          }}
        >
          3-5g sugar. 9g fiber. 5 delicious flavors.
        </Typography>
        <Button
          className="btn-hero"
          sx={{
            height: "3.5rem",
            width: "10rem",
            opacity: 0,
            "&:hover": {
              color: "black",
            },
          }}
        >
          <Typography>shop now</Typography>
        </Button>
      </Box>
      <Box
        className="flavour-wrapper"
        sx={{
          minHeight: "100dvh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "0px 0px 0px 8%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "24px",
            zIndex: 80,
          }}
        >
          <Typography
            className="flavour_text"
            variant="h1"
            sx={{
              fontSize: "7rem",
              fontWeight: "800",
            }}
          >
            Try all <br /> five <br />
            flavors
          </Typography>
          <Typography
            className="flavour_body"
            sx={{
              fontSize: "1.3rem",
            }}
          >
            Our soda is made with real fruit juice and a touch of cane sugar. We
            never use artificial sweeteners or high fructose corn syrup. Try all
            five flavors and find your favorite!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;

// {
  
//   const MyComponent = ({ className, ...restProps }) => {
//     return (
//       <Box className={clsx("px-4 first:pt-10 md:px-6", className)} {...restProps}>
//         <Box sx={{ mx: 'auto', maxWidth: '7xl', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Grid container>
//             <Grid item xs={12} sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
//               <Grid container justifyContent="center" alignItems="center" textAlign="center">
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     fontSize: { xs: '7xl', md: '9rem', lg: '13rem' },
//                     fontWeight: 'bold',
//                     textTransform: 'uppercase',
//                     lineHeight: 0.8,
//                     color: 'orange',
//                   }}
//                 >
//                   <TextSplitter
//                     text={asText(slice.primary.heading)}
//                     wordDisplayStyle="block"
//                     className="hero-header-word"
//                   />
//                 </Typography>
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     mt: 12,
//                     fontSize: { xs: '5xl', lg: '6xl' },
//                     fontWeight: 'bold',
//                     color: 'skyblue',
//                   }}
//                 >
//                   <PrismicRichText field={slice.primary.subheading} />
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ fontSize: '2xl', fontWeight: 'normal', color: 'skyblue' }}
//                 >
//                   <PrismicRichText field={slice.primary.body} />
//                 </Typography>
//                 <Button
//                   href={slice.primary.button_link}
//                   sx={{ mt: 12 }}
//                   className="hero-button"
//                 >
//                   {slice.primary.button_text}
//                 </Button>
//               </Grid>
//             </Grid>
  
//             <Grid
//               container
//               alignItems="center"
//               gap={4}
//               sx={{ height: '100vh', zIndex: 80, gridTemplateColumns: { md: '1fr 1fr' } }}
//             >
//               <PrismicNextImage
//                 sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}
//                 field={slice.primary.cans_image}
//               />
//               <Grid item>
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     fontSize: { xs: '6xl', lg: '8xl' },
//                     fontWeight: 'bold',
//                     textTransform: 'uppercase',
//                     color: 'skyblue',
//                   }}
//                 >
//                   <TextSplitter text={asText(slice.primary.second_heading)} />
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     mt: 4,
//                     maxWidth: 'xl',
//                     fontSize: 'xl',
//                     fontWeight: 'normal',
//                     color: 'skyblue',
//                   }}
//                 >
//                   <PrismicRichText field={slice.primary.second_body} />
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     );
//   };
  
// }
