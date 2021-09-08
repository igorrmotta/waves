import { ImageProcessor } from "./image-processor";
import { paths } from "./paths";

const img = new ImageProcessor(paths.sampleImage);
img
  .applyWatermark()
  .then(() => console.log("watermarked"))
  .catch((err) => console.error(err));
