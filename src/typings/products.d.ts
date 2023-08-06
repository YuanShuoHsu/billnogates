interface ProductImage {
  src: string;
  alt: string;
}

interface Products {
  id: number;
  name: string;
  dimensions: {
    [size: string]: number;
  };
  colors: {
    [rgb: string]: string;
  };
  images: {
    main: ProductImage;
    gallery: ProductImage[];
    description: ProductImage[];
    information: ProductImage[];
  };
}

export default Products;
