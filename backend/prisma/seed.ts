import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "Igor Surfer",
      createdAt: new Date().toISOString(),
      email: "igorrmotta@gmail.com",
      password: "Test123456",
    },
  });
  const surfer1 = await prisma.surfer.create({
    data: { user: { connect: { id: user1.id } } },
  });
  const session1 = await prisma.session.create({
    data: {
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      location: "Maroubra",
    },
  });
  const surfSession = await prisma.surfSession.create({
    data: {
      surfer: { connect: { id: surfer1.id } },
      session: { connect: { id: session1.id } },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Igor Photographer",
      createdAt: new Date().toISOString(),
      email: "igor@edapp.com",
      password: "Test123456",
    },
  });
  const photographer1 = await prisma.photographer.create({
    data: { user: { connect: { id: user2.id } } },
  });
  const session2 = await prisma.session.create({
    data: {
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      location: "Maroubra",
    },
  });
  const photoSession = await prisma.photoSession.create({
    data: {
      photographer: { connect: { id: photographer1.id } },
      session: { connect: { id: session2.id } },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
