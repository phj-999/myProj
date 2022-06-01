// useFrame() 参数
// RootState = {
//     set: SetState<RootState>;
//     get: GetState<RootState>;
//     gl: THREE.WebGLRenderer;
//     camera: Camera & {
//         manual?: boolean;
//     };
//     scene: THREE.Scene;
//     raycaster: THREE.Raycaster;
//     clock: THREE.Clock;
//     events: EventManager<any>;
//     xr: {
//         connect: () => void;
//         disconnect: () => void;
//     };
//     controls: THREE.EventDispatcher | null;
//     pointer: THREE.Vector2;
//     mouse: THREE.Vector2;
//     legacy: boolean;
//     linear: boolean;
//     flat: boolean;
//     frameloop: 'always' | 'demand' | 'never';
//     performance: Performance;
//     size: Size;
//     viewport: Viewport & {
//         getCurrentViewport: (camera?: Camera, target?: THREE.Vector3 | Parameters<THREE.Vector3['set']>, size?: Size) => Omit<Viewport, 'dpr' | 'initialDpr'>;
//     };
//     invalidate: (frames?: number) => void;
//     advance: (timestamp: number, runGlobalEffects?: boolean) => void;
//     setEvents: (events: Partial<EventManager<any>>) => void;
//     setSize: (width: number, height: number) => void;
//     setDpr: (dpr: Dpr) => void;
//     setFrameloop: (frameloop?: 'always' | 'demand' | 'never') => void;
//     onPointerMissed?: (event: MouseEvent) => void;
//     previousRoot?: UseBoundStore<RootState, StoreApi<RootState>>;
//     internal: InternalState;
// };