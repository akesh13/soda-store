"use client";
import React, { useRef } from "react";
import FloatingCan from "../FloatingCan";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Environment, OrbitControls } from "@react-three/drei";
gsap.registerPlugin(useGSAP);

function Scene() {
  const canRef1 = useRef(null);
  const canRef2 = useRef(null);
  const canRef3 = useRef(null);
  const canRef4 = useRef(null);
  const canRef5 = useRef(null);
  const can1GroupRef = useRef(null);
  const can2GroupRef = useRef(null);
  const groupRef = useRef(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    gsap.set(canRef1.current.position, {
      x: -2,
    });
    gsap.set(canRef1.current.rotation, {
      z: -0.5,
    });
    gsap.set(canRef2.current.position, {
      x: 2,
    });
    gsap.set(canRef2.current.rotation, {
      z: 0.5,
    });
    gsap.set(canRef3.current.position, {
      y: 5,
      z: 2,
    });
    gsap.set(canRef4.current.position, {
      x: 2,
      y: 4,
      z: 2,
    });
    gsap.set(canRef5.current.position, {
      y: -5,
    });

    const introTl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "back.out(1.4)",
      },
    });
    introTl.from(
      can1GroupRef.current.position,
      {
        y: -5,
        x: 1,
      },
      0
    );
    introTl.from(
      can1GroupRef.current.rotation,
      {
        z: 3,
      },
      0
    );
    introTl.from(
      can2GroupRef.current.position,
      {
        y: 5,
        x: 1,
      },
      0
    );
    introTl.from(
      can2GroupRef.current.rotation,
      {
        z: 3,
      },
      0
    );
    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".main_wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });
    scrollTl.to(groupRef.current.rotation, {
      y: Math.PI * 2,
    });
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={canRef1}
          flavor={"blackCherry"}
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan
          ref={canRef2}
          flavor={"lemonLime"}
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <FloatingCan ref={canRef3} flavor={"grape"} floatSpeed={FLOAT_SPEED} />
      <FloatingCan
        ref={canRef4}
        flavor={"strawberryLemonade"}
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan
        ref={canRef5}
        flavor={"watermelon"}
        floatSpeed={FLOAT_SPEED}
      />
      <OrbitControls />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

export default Scene;
