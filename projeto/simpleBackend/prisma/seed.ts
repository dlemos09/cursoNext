import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "User" RESTART IDENTITY CASCADE');

  const users = [
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', dateOfBirth: new Date('1990-01-01') },
    { name: 'Bob Smith', email: 'bob.smith@example.com', dateOfBirth: new Date('1985-05-15') },
    { name: 'Carol White', email: 'carol.white@example.com', dateOfBirth: new Date('1992-03-10') },
    { name: 'David Brown', email: 'david.brown@example.com', dateOfBirth: new Date('1988-07-22') },
    { name: 'Eva Green', email: 'eva.green@example.com', dateOfBirth: new Date('1995-12-05') },
    { name: 'Frank Black', email: 'frank.black@example.com', dateOfBirth: new Date('1983-09-17') },
    { name: 'Grace Lee', email: 'grace.lee@example.com', dateOfBirth: new Date('1991-11-30') },
    { name: 'Henry King', email: 'henry.king@example.com', dateOfBirth: new Date('1987-04-12') },
    { name: 'Ivy Scott', email: 'ivy.scott@example.com', dateOfBirth: new Date('1993-06-25') },
    { name: 'Jack Turner', email: 'jack.turner@example.com', dateOfBirth: new Date('1989-08-14') },
    { name: 'Karen Adams', email: 'karen.adams@example.com', dateOfBirth: new Date('1994-02-19') },
    { name: 'Leo Clark', email: 'leo.clark@example.com', dateOfBirth: new Date('1986-10-03') },
    { name: 'Mona Lewis', email: 'mona.lewis@example.com', dateOfBirth: new Date('1990-05-27') },
    { name: 'Nina Walker', email: 'nina.walker@example.com', dateOfBirth: new Date('1992-09-09') },
    { name: 'Oscar Hall', email: 'oscar.hall@example.com', dateOfBirth: new Date('1984-12-21') },
    { name: 'Paula Young', email: 'paula.young@example.com', dateOfBirth: new Date('1991-03-16') },
    { name: 'Quinn Allen', email: 'quinn.allen@example.com', dateOfBirth: new Date('1988-07-29') },
    { name: 'Rita Wright', email: 'rita.wright@example.com', dateOfBirth: new Date('1993-01-11') },
    { name: 'Sam Harris', email: 'sam.harris@example.com', dateOfBirth: new Date('1987-06-06') },
    { name: 'Tina Martin', email: 'tina.martin@example.com', dateOfBirth: new Date('1995-10-18') },
    { name: 'Uma Nelson', email: 'uma.nelson@example.com', dateOfBirth: new Date('1989-02-23') },
    { name: 'Vince Carter', email: 'vince.carter@example.com', dateOfBirth: new Date('1990-08-31') },
    { name: 'Wendy Perez', email: 'wendy.perez@example.com', dateOfBirth: new Date('1986-11-13') },
    { name: 'Xander Reed', email: 'xander.reed@example.com', dateOfBirth: new Date('1992-04-04') },
    { name: 'Yara Stone', email: 'yara.stone@example.com', dateOfBirth: new Date('1994-12-27') },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });