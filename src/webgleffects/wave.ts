import { WebGLEffect } from "../types";
import { webglLoadEffectShader, webglSetFloat } from "../utils/webgl";
import shaderWave from "../shaders/wave";

const webglWave: WebGLEffect = (keyframe) => {
  const program = webglLoadEffectShader(shaderWave);
  webglSetFloat(program, "keyframe", keyframe);
  return program;
};

export default webglWave;