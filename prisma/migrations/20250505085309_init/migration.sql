-- CreateTable
CREATE TABLE "Weather" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "condition" TEXT NOT NULL,
    "humidity" INTEGER NOT NULL,
    "wind" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Weather_city_key" ON "Weather"("city");

-- CreateIndex
CREATE INDEX "Weather_city_idx" ON "Weather"("city");
