declare module "react-tilt" {
  import { ComponentType, HTMLAttributes } from "react";

  interface TiltProps extends HTMLAttributes<HTMLDivElement> {
    options?: {
      max?: number;
      perspective?: number;
      scale?: number;
      speed?: number;
      transition?: boolean;
      axis?: "X" | "Y" | null;
      reset?: boolean;
      easing?: string;
    };
  }

  const Tilt: ComponentType<TiltProps>;
  export default Tilt;
}
