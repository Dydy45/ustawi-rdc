import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    await prisma.therapist.createMany({
        data:[
            { name: 'Dr Kiese', speciality: 'Anxiété', languages: ['Français', 'Lingala'], price: 2000, avatar: 'https://i.pravatar.cc/150?img=1' },
            { name: 'Dr Mbuyi', speciality: 'Dépression', languages: ['Swahili', 'Français'], price: 1500, avatar: 'https://i.pravatar.cc/150?img=2' },
            { name: 'Dr Kavira', speciality: 'Stress', languages: ['Tshiluba', 'Français'], price: 1800, avatar: 'https://i.pravatar.cc/150?img=3' },
        ],
    });
    console.log('✅Seed terminé avec succès');
}

seed()
    .catch(e =>
        console.error(e)
    )
    .finally(async () =>
        await prisma.$disconnect()
    );