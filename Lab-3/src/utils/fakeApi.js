export const fetchAdultProducts = async () => {
  const products = [
    {
      id: 1,
      title: "Creatine",
      description: "High-performance laptop for work and entertainment",
      price: 1500,
      thumbnail: "https://m.media-amazon.com/images/I/716durka4KL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      title: "Protien Powder",
      description: "Premium quality protein powder for muscle growth and recovery",
      price: 2500,
      thumbnail: "https://cdn2.nutrabay.com/uploads/variant/images/featured_image-NB-NUT-1054-01-1753299710-400x400.webp"
    },
    {
      id: 3,
      title: "Apple 17 series",
      description: "Best Segment Mobile",
      price: 200000,
      thumbnail: "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2025/09/10115247/Apple-iPhone-17-Pro-color-lineup-250909-900x900.jpg",
    },
    {
      id: 6,
      title: "Sony Camera",
      description: "Best Camera of the Year",
      price: 110000,
      thumbnail: "https://camera-review.co.uk/category/camera-review.co.uk/sony.webp"
    },
    {
      id: 7,
      title: "Mac book Air",
      description: "Best for its securtiy",
      price: 180000,
      
      thumbnail: "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large_2x.jpg",
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
};
