interface ProductImage {
  src: string;
  alt: string;
}

interface Products {
  id: number;
  name: string;
  dimensions: {
    [size: string]: number | undefined;
  };
  colors: {
    [rgb: string]: string | undefined;
  };
  images: {
    main: ProductImage;
    gallery: ProductImage[];
    description: ProductImage[];
    information: ProductImage[];
  };
}

export { Products };
