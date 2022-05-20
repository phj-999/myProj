import React, {useRef} from 'react';
import * as THREE from 'three';
import _ from 'lodash';
import { useFrame } from '@react-three/fiber';

const Spinner = () => {
    const ref = useRef();
    useFrame(state => {
        const y = _.get(ref.current, 'rotation.y');
        if (y) {
            ref.current.rotation.y += .1;
            ref.current.rotation.x += .1;
        }
    });

    return (
        <mesh ref={ref} position={[0, 3, 0]}>
            <dodecahedronBufferGeometry args={[1, 1]} />
            <meshPhysicalMaterial color={'rgb(30, 75, 93)'} opacity={.5} side={THREE.DoubleSide}/>
        </mesh>
    )
};

export default Spinner;