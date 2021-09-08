import { ImageProcessor } from "./image-processor";
import { paths } from "./paths";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  const img = new ImageProcessor(paths.sampleImage);
  img
    .applyWatermark()
    .then(() => console.log("watermarked"))
    .catch((err) => console.error(err));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
