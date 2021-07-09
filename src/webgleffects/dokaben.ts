import { WebGLEffect } from "../types";
import { gl } from "../webgleffects";
import shaderWarp from "../shaders/warp";
import { matrixPerspective, matrixFlatten } from "../utils/matrix";

const webglDokaben: WebGLEffect = (keyframe, w, h, args) => {
  const program = shaderWarp(args);
  const pos = 0.5 + 0.5 * Math.cos(2 * Math.PI * keyframe); /* 0 ~ 1 */
  const diffH = 0.3 * pos / 2;
  const diffV = 1.0 * pos / 2;
  const m = matrixPerspective(
    [0.25, 0.25, 0.75, 0.25, 0.25, 0.75, 0.75, 0.75],
    [0.25 + diffH, 0.25 + diffV, 0.75 - diffH, 0.25 + diffV, 0.25, 0.75, 0.75, 0.75],
  );
  gl.uniformMatrix3fv(gl.getUniformLocation(program, "matrix"), false, matrixFlatten(m));
};

export default webglDokaben;
