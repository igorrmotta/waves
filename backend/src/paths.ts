import path from "path";

const ASSETS_FOLDER = path.resolve(__dirname, "../assets");
const OUTPUT_FOLDER = path.resolve(__dirname, "../output");
const WATERMARK = path.join(ASSETS_FOLDER, "watermark.png");
const IMAGE = path.join(ASSETS_FOLDER, "image.jpeg");

export const paths = {
  assets: ASSETS_FOLDER,
  output: OUTPUT_FOLDER,
  watermark: WATERMARK,
  sampleImage: IMAGE,
};
