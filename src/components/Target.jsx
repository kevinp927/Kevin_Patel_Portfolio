import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//const MODEL_URL =
  //  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf";

const Target = (props) => {
    const targetRef = useRef();

    // Load the model (THIS is the line that will fail if the URL or files are wrong)
    //const { scene } = useGLTF(MODEL_URL);

    // Animation
    useGSAP(() => {
        if (!targetRef.current) return;

        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <mesh
            ref={targetRef}
            rotation={[0, Math.PI / 5, 0]}
            scale={1.5}
            {...props}
        >

        </mesh>
    );
};

// Preload the model
useGLTF.preload();

export default Target;
