// src/pages/Gallery.tsx
import React from 'react';
import ImageGallery from '../PageComponents/imagegallery';

export default function Gallery() {
    const galleryItems: Array<{ type: 'image', imageUrl: string, category: string }> = [
        { type: 'image', imageUrl: 'images/gallery/IMG_1514.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1515.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1513.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1512.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1511.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1510.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1471.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1516.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1509.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1508.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1507.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1506.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1505.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1504.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1503.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1472.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1502.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1501.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1500.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1499.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1498.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1473.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1474.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1475.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1476.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1477.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1478.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1479.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1480.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1481.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1482.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1483.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1484.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1485.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1486.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1487.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1488.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1489.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1490.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1491.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1492.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1493.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1494.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1495.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1496.jpg', category: 'gym' },
        { type: 'image', imageUrl: 'images/gallery/IMG_1497.jpg', category: 'gym' },
    ];
 

    return (
        <section className="bg-white dark:bg-gray-800 py-12">
            <div className="flex justify-center items-center h-full">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                    Gallery
                </h2>
            </div>
            <ImageGallery items={galleryItems} category={'gym'} />
        </section>
    );
}