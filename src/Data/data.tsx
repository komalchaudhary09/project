import Kalpana from "../assets/Image/Kalpana.jpeg";
import Lucy from "../assets/Image/lucy.jpeg";
import Harry from "../assets/Image/Harry.jpeg"

export interface MenuItem {
  name: string;
  description: string;
  image: string;
  position:string;
}

export const MenuList: MenuItem[] = [
  {
    name: "Kalpana Thakuri",
    description:
      "Glint is an amazing agency to work with! Their desin and development team are incredibly talented",
    image: Kalpana,
    position: "CEO, Microsoft",
  },
  {
    name: "Lucy Heartfiliya",
    description:
      "Their cretivity and  attention to detail truly helped our brand grow.Highly recommended",
    image: Lucy,
     position:"CEO, Google",
  },
  {
    name: "Harry Scarlet",
    description:
      "Highly professional and friendly team. They delivred everthing on time and exceeded expectation",
    image: Harry,
     position:"CEO,Apple"
  },
]