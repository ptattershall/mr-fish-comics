import prisma from '@/api/auth/[...nextauth]/route'
import mongoose from 'mongoose';
import { createModel } from 'mongoose-gridfs';
import fs from 'fs';
import { Readable } from 'stream';

// Connect to MongoDB
const connect = mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a GridFS model
const Image = createModel({
    modelName: 'Image',
    connection: mongoose.connection
  });
  
  const saveImage = async (file: Readable, userId: string): Promise<void> => {
    const writeStream = Image.write();
  
    writeStream.on('finish', async (file) => {
      const imageId = file._id.toString();
  
      // Save the reference to the Prisma User model
      await prisma.user.update({
        where: { id: userId },
        data: { image: imageId },
      });
  
      console.log(`Stored image with id ${imageId}`);
    });
  
    writeStream.on('error', (error) => {
      console.error(error);
    });
  
    file.pipe(writeStream);
  };
  
  // Usage example
  /*const userId = 'some-user-id';
  const imageStream = fs.createReadStream('path/to/your/image.png');
  saveImage(imageStream, userId);*/