import type { Product } from "../models/product";
import eldarImg from "../assets/eldar-1.png";
import eidunImg from "../assets/eidun-2.png";
import alvarImg from "../assets/alvar-5.png";
import eiraImg from "../assets/eira-4.png";
import bodilImg from "../assets/bodil.png";
import sizeChartImg from "../assets/size-chart.png";

export const PRODUCT_LIST: Product[] = [
  {
    id: "7afc42a0-9b3c-454f-bed2-132eca7263b6",
    articleNumber: "100345-567",
    name: "Peril",
    description:
      "A soft, light women’s glove in lambskin suede for comforting warmth on the coldest winter days. A timeless design sewn entirely by hand with the suede side turned outwards, while the fluffy lambskin envelops the hand in warmth. A beautiful, warming fashion accessory that works equally well for winter country walks and days in the city.",
    category: ["men"],
    sizeChartImg: sizeChartImg,
    availableVariantsOptions: {
      color: [
        {
          image: bodilImg,
          value: "black",
        },
        {
          image: eidunImg,
          value: "brown",
        },
        {
          image: alvarImg,
          value: "yellow",
        },
      ],
      size: ["S", "M", "L"],
    },
    variants: [
      {
        color: "black",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [bodilImg],
      },
      {
        color: "brown",
        size: "S",
        price: 200,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "yellow",
        size: "S",
        price: 229,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "yellow",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "brown",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "black",
        size: "L",
        price: 229,
        outOfStock: false,
        images: [bodilImg],
      },
    ],
  },
  {
    id: "2815cd97-837e-4000-a520-02f634202ce1",
    articleNumber: "100345-231",
    name: "Eldar",
    description:
      "A soft, light women’s glove in lambskin suede for comforting warmth on the coldest winter days. A timeless design sewn entirely by hand with the suede side turned outwards, while the fluffy lambskin envelops the hand in warmth. A beautiful, warming fashion accessory that works equally well for winter country walks and days in the city.",
    category: ["men"],
    sizeChartImg: sizeChartImg,
    availableVariantsOptions: {
      color: [
        {
          image: bodilImg,
          value: "black",
        },
        {
          image: eidunImg,
          value: "brown",
        },
        {
          image: alvarImg,
          value: "yellow",
        },
      ],
      size: ["S", "M", "L"],
    },
    variants: [
      {
        color: "brown",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "black",
        size: "S",
        price: 200,
        outOfStock: false,
        images: [eldarImg],
      },
      {
        color: "yellow",
        size: "L",
        price: 229,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "yellow",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "brown",
        size: "M",
        price: 100,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "black",
        size: "L",
        price: 229,
        outOfStock: false,
        images: [bodilImg],
      },
    ],
  },
  {
    id: "bcdc4b90-da5a-43f6-9a5a-461df23207ea",
    articleNumber: "100345-321",
    name: "Eidun",
    description:
      "A soft, light women’s glove in lambskin suede for comforting warmth on the coldest winter days. A timeless design sewn entirely by hand with the suede side turned outwards, while the fluffy lambskin envelops the hand in warmth. A beautiful, warming fashion accessory that works equally well for winter country walks and days in the city.",
    category: ["men"],
    sizeChartImg: sizeChartImg,
    availableVariants: ["size", "color"],
    availableVariantsOptions: {
      color: [
        {
          image: bodilImg,
          value: "black",
        },
        {
          image: eidunImg,
          value: "brown",
        },
        {
          image: alvarImg,
          value: "yellow",
        },
      ],
      size: ["S", "M", "L"],
    },
    variants: [
      {
        color: "black",
        size: "L",
        price: 200,
        outOfStock: false,
        images: [bodilImg],
      },
      {
        color: "brown",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "yellow",
        size: "S",
        price: 229,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "yellow",
        size: "M",
        price: 149,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "brown",
        size: "M",
        price: 199,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "black",
        size: "L",
        price: 229,
        outOfStock: false,
        images: [bodilImg],
      },
    ],
  },
  {
    id: "63bafd2a-65e0-4aaf-b6c2-4b478bed60bb",
    articleNumber: "100345-989",
    name: "Alvar",
    description:
      "A soft, light women’s glove in lambskin suede for comforting warmth on the coldest winter days. A timeless design sewn entirely by hand with the suede side turned outwards, while the fluffy lambskin envelops the hand in warmth. A beautiful, warming fashion accessory that works equally well for winter country walks and days in the city.",
    category: ["men"],
    sizeChartImg: sizeChartImg,
    availableVariantsOptions: {
      color: [
        {
          image: bodilImg,
          value: "black",
        },
        {
          image: eidunImg,
          value: "brown",
        },
        {
          image: alvarImg,
          value: "yellow",
        },
      ],
      size: ["S", "M", "L"],
    },
    variants: [
      {
        color: "yellow",
        size: "S",
        price: 229,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "black",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [bodilImg],
      },
      {
        color: "brown",
        size: "S",
        price: 100,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "yellow",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "brown",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "black",
        size: "L",
        price: 229,
        outOfStock: false,
        images: [bodilImg],
      },
    ],
  },
  {
    id: "7765d958-ace6-48f2-8ec2-54fa673a359b",
    articleNumber: "100345-007",
    name: "Eira",
    description:
      "A soft, light women’s glove in lambskin suede for comforting warmth on the coldest winter days. A timeless design sewn entirely by hand with the suede side turned outwards, while the fluffy lambskin envelops the hand in warmth. A beautiful, warming fashion accessory that works equally well for winter country walks and days in the city.",
    category: ["men"],
    sizeChartImg: sizeChartImg,
    availableVariantsOptions: {
      color: [
        {
          image: bodilImg,
          value: "black",
        },
        {
          image: eidunImg,
          value: "brown",
        },
        {
          image: alvarImg,
          value: "yellow",
        },
      ],
      size: ["S", "M", "L"],
    },
    variants: [
      {
        color: "black",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [bodilImg],
      },
      {
        color: "brown",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "yellow",
        size: "S",
        price: 229,
        outOfStock: false,
        images: [eiraImg],
      },
      {
        color: "yellow",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [alvarImg],
      },
      {
        color: "brown",
        size: "M",
        price: 200,
        outOfStock: false,
        images: [eidunImg],
      },
      {
        color: "black",
        size: "L",
        price: 229,
        outOfStock: false,
        images: [bodilImg],
      },
    ],
  },
];
