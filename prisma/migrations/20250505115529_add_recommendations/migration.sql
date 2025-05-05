/*
  Warnings:

  - Added the required column `category` to the `Recommendation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Recommendation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Diary" ADD COLUMN     "selectedActivity" TEXT,
ADD COLUMN     "selectedClothes" TEXT,
ADD COLUMN     "selectedFood" TEXT,
ADD COLUMN     "selectedMovie" TEXT;

-- AlterTable
ALTER TABLE "Recommendation" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "movies" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Recommendation_category_idx" ON "Recommendation"("category");
