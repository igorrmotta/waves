import sharp from "sharp";
import path from "path";
import { paths } from "./paths";

export class ImageProcessor {
  private imagePath: string;

  constructor(imagePath: string) {
    this.imagePath = imagePath;
  }

  public async applyWatermark() {
    await sharp(this.imagePath)
      .composite([
        { input: paths.watermark, blend: "multiply", gravity: "center" },
      ])
      .png({ compressionLevel: 9, quality: 10, })
      .toFile(path.join(paths.output, "img.jpeg"));
  }
}
