-- CreateTable
CREATE TABLE `Pengaduan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `ektp` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `agama` VARCHAR(191) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `wargaNegara` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `fotoEktp` VARCHAR(191) NOT NULL,
    `pekerjaan` VARCHAR(191) NOT NULL,
    `hanphone` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tempatKejadian` VARCHAR(191) NOT NULL,
    `tanggalJamKejadian` DATETIME(3) NOT NULL,
    `detailLaporan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pengaduan_ektp_key`(`ektp`),
    UNIQUE INDEX `Pengaduan_email_key`(`email`),
    UNIQUE INDEX `Pengaduan_hanphone_key`(`hanphone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
