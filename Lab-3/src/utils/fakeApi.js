export const fetchAdultProducts = async () => {
  const products = [
    {
      id: 1,
      title: "Luxury Massage Oil",
      description: "Relaxing aromatic body oil",
      price: 29,
      thumbnail: "https://th.bing.com/th/id/OIP.vy2ylQlpXq03rvu724yi5QHaHa?w=177&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      id: 2,
      title: "Romantic Candle Set",
      description: "Scented candles for warm ambiance",
      price: 19,
      thumbnail: "https://th.bing.com/th/id/OIP.pv_a6Ct4mqjJduhVE01ohQHaE8?w=231&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      id: 3,
      title: "Couple Card Game",
      description: "Fun and intimate relationship game",
      price: 35,
      thumbnail: "https://th.bing.com/th/id/OIP.7AY8U4dRII7RDEgXRyr_LAHaEl?w=311&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      id: 4,
      title: "Silk Blindfold",
      description: "Soft premium silk blindfold",
      price: 15,
      thumbnail: "https://th.bing.com/th/id/OIP.kHQC66ydOUFZryMF88qtsAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      id: 5,
      title: "Elegant Lingerie Set",
      description: "Comfortable and stylish design",
      price: 49,
      thumbnail: "https://th.bing.com/th/id/OIP.zeg7g2lGxbNFMyEM1UL6rQHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      id: 6,
      title: "Water-Based Lubricant",
      description: "Safe and smooth experience",
      price: 18,
      thumbnail: "https://th.bing.com/th/id/OIP.KtcsbO_nGMSR2qejoUVMhwHaEl?w=281&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    }
     {
      id: 6,
      title: "Male condoms",
      description: "Saftey and ",
      price: 18,
      thumbnail: "https://th.bing.com/th/id/OIP.KtcsbO_nGMSR2qejoUVMhwHaEl?w=281&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
};
