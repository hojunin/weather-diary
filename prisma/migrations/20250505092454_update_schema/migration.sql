-- DropIndex
DROP INDEX "Weather_city_idx";

-- DropIndex
DROP INDEX "Weather_city_key";

-- AlterTable
ALTER TABLE "Weather" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "humidity" DROP NOT NULL,
ALTER COLUMN "wind" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Diary" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "weatherId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Diary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "diaryId" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "id" SERIAL NOT NULL,
    "weatherType" TEXT NOT NULL,
    "tempMin" DOUBLE PRECISION,
    "tempMax" DOUBLE PRECISION,
    "clothes" TEXT[],
    "foods" TEXT[],
    "drinks" TEXT[],
    "activities" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Diary_date_idx" ON "Diary"("date");

-- CreateIndex
CREATE INDEX "Comment_diaryId_idx" ON "Comment"("diaryId");

-- CreateIndex
CREATE INDEX "Recommendation_weatherType_idx" ON "Recommendation"("weatherType");

-- CreateIndex
CREATE INDEX "Weather_city_date_idx" ON "Weather"("city", "date");

-- AddForeignKey
ALTER TABLE "Diary" ADD CONSTRAINT "Diary_weatherId_fkey" FOREIGN KEY ("weatherId") REFERENCES "Weather"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "Diary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
